import { Router } from 'express';
import sql from '../../DB/connection.js';
import userController from './controller/user.js'

const router = Router()

router.post('/user/signup', userController.signUp)

router.post('/user/signin',userController.signIn)


export default router