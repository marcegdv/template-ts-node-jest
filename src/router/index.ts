import express, { Router } from 'express';
import { homeControllerExample } from '../controllers/home';
import { healthControllerExample } from '../controllers/health';
import { datenagerController } from '../controllers/datenager';

const router: Router = express.Router();

router.get('/', homeControllerExample);
router.get('/health', healthControllerExample);

router.get("/holydays/:year/:countryCode", datenagerController);

export default router;