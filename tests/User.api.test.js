/* eslint-disable no-undef */
const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../app/index');

dotenv.config();

describe('API Login', () => {
  it('success login', async () => {
    const user = {
      email: 'fikri@binar.co.id',
      password: '123456',
    };
    const response = await request(app).post('/v1/auth/login').send(user);
    expect(response.statusCode).toBe(201);
  });

  it('failed login : wrong password', async () => {
    const failedUser = {
      email: 'fikri@binar.co.id',
      password: '1234656',
    };
    const response = await request(app).post('/v1/auth/login').send(failedUser);
    expect(response.statusCode).toBe(401);
  });
});

describe('API Register', () => {
  it('success register', async () => {
    const user = {
      name: 'tejo',
      email: 'tejo@gmail.com',
      password: 'rahasia123',
    };
    const response = await request(app).post('/v1/auth/register').send(user);
    expect(response.statusCode).toBe(201);
  });
});
