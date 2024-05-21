global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

const request = require('supertest');
const app = require('./server');

describe('POST /api/audit', () => {
    it('should return audit results', async () => {
      // Increase the timeout to 10 seconds (10000 milliseconds)
      jest.setTimeout(10000);
  
      const res = await request(app)
        .post('/api/audit')
        .send({ url: 'https://example.com' });
  
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('violations');
    });
  });
  
