process.env.NODE_ENV = 'test';
process.on('unhandledRejection', (reason) => {
  if (reason && reason.message && reason.message.includes('punycode')) {
    console.warn('Suppressed punycode warning');
  } else {
    throw reason;
  }
});
