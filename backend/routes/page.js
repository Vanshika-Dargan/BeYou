import express from 'express'
import { createPage } from '../controller/page.js';


const router=express.Router();

router.post('/',createPage)

export default router;