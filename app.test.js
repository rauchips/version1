const request = require('supertest');
const app = require('./app')

describe('Todos API', () => {
  test('GET /  list of all to do activities', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        completed: expect.any(Boolean)
      })
    ]));
  })

  it('GET /:id  list a specific to do activity', async () => {
    const response = await request(app)
      .get('/1')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        completed: expect.any(Boolean)
      }));
  })
})