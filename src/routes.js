import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.render('main')
})

routes.get('/login', (req, res) => {
  res.render('login/index')
})

routes.get('/user', (req, res) => {
  res.render('user/index')
})

routes.get('/operator', (req, res) => {
  res.render('operator/index')
})

export default routes;