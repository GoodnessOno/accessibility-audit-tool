const { exec } = require('child_process');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const axe = require('axe-core');

const ColorContrastChecker = require('color-contrast-checker');
    const ccc = new ColorContrastChecker();

    // Example function to check color contrast
    function checkContrast(element) {
      const bgColor = element.style.backgroundColor;
      const textColor = element.style.color;
      return ccc.isLevelAA(bgColor, textColor);
    }

async function generateAltText(imageUrl) {
  return new Promise((resolve, reject) => {
    exec(`python3 alt_text_generation.py ${imageUrl}`, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${error.message}`);
      } else if (stderr) {
        reject(`Error: ${stderr}`);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

async function performAudit(url) {
  const { data: html } = await axios.get(url);
  const dom = new JSDOM(html);
  const results = await axe.run(dom.window.document);

  const images = dom.window.document.querySelectorAll('img');
  for (let img of images) {
    if (!img.alt) {
      const altText = await generateAltText(img.src);
      img.alt = altText;
    }
  }
  return results;
}

module.exports = { performAudit };
