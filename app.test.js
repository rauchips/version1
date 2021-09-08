const { it } = require('@jest/globals');
const request = require('supertest');
const app = require('./app')

describe('Todos API', () => {
  it('GET /  list of all to do activities', () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            completed: expect.any(Boolean)
          })
        ]))
      })
  })
  it('GET /:id  list a specific to do activity', () => {
    return request(app)
      .get('/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            completed: expect.any(Boolean)
          }))
      })
  })
})