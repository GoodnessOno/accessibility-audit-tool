const request = require('supertest');
const app = require('./server');

describe('POST /api/audit', () => {
  it('should return audit results', async () => {
    const res = await request(app)
      .post('/api/audit')
      .send({ url: 'https://example.com' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('violations');
  });
});
