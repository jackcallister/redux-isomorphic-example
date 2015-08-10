import express from 'express';
import render from '../utils/render';

const router = express.Router();

router.get('/personal-details', render);
router.get('/skills-and-expertise', render);

export default router;
