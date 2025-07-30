import { Router } from 'express';

const routers = Router();

routers.get('/', (req,res) => {
  return res.status(200).json({ menssage: 'Olá Dev!' });
});

export { routers };