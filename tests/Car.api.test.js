/* eslint-disable no-undef */
const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../app/index');
// const baseURL = "http://localhost:8000"

dotenv.config();

// get all car test
describe('API get all cars', () => {
  it('success get all data cars', async () => {
    const response = await request(app).get('/v1/cars');
    expect(response.statusCode).toBe(200);
  });
});
// get car by id test
describe('API get car By ID', () => {
  it('success get data car', async () => {
    const response = await request(app).get('/v1/cars/20');
    expect(response.statusCode).toBe(200);
  });
});
// delete car test
describe('API delete car by ID', () => {
  it('Unauthorized', async () => {
    const response = await request(app).delete('/v1/cars/20');
    expect(response.statusCode).toBe(401);
  });
});
// update car test
describe('API update car by ID', () => {
  it('Unauthorized', async () => {
    const cars = {
      name: 'string',
      price: 0,
      image: 'string',
      size: 'string',
    };
    const response = await request(app).put('/v1/cars/20').send(cars);
    expect(response.statusCode).toBe(401);
  });
});
// create car test
describe('API create cars', () => {
  it('invalid token', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InN0cmluZyIsImVtYWlsIjoic3RyaW5nIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJDVVNUT01FUiJ9LCJpYXQiOjE2NjgwMTg4MjB9.weFZDBPqqS0dA7RPNzlytJln8bZXBs0cfJPlAvzKVtw';
    const cars = {
      name: 'string',
      price: 0,
      image: 'string',
      size: 'string',
    };
    const response = await request(app).post('/v1/cars').set('Authorization', `Bearer ${token}`).send(cars);
    expect(response.statusCode).toBe(401);
  });
  it('Unauthorized', async () => {
    const cars = {
      name: 'string',
      price: 0,
      image: 'string',
      size: 'string',
    };
    const response = await request(app).post('/v1/cars').send(cars);
    expect(response.statusCode).toBe(401);
  });
});
