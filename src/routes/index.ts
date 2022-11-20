import { Router } from "express";
import  IndexControllerPublications  from "../controllers/publicationController";

const router:Router = Router();
const controller = new IndexControllerPublications;

router.get('/',controller.getPublications);
router.post('/',controller.createPublication);


export default router;
