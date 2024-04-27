import express, { Router } from 'express';
import { homeControllerExample } from '../controllers/home';
import { healthControllerExample } from '../controllers/health';
import { dateNagerController } from '../controllers/dateNager';

const router: Router = express.Router();

router.get('/', homeControllerExample);
router.get('/health', healthControllerExample);

router.get("/holydays", dateNagerController);

export default router;