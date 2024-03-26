import express, {Request, Response} from 'express';
import { create, findAll, findByid } from './usuario/usuario.service';

export const router = express.Router();

router.route('/usuario').get(async (req: Request, res: Response) => {
    res.send(await findAll());
})

router.route('/usuario/:id').get(async (req:Request, res:Response) => {
    res.send(await findByid(+req.params.id))
})

router.route('/usuario').post(async(req: Request, res: Response) =>{
    res.send(await create(req.body))
})

