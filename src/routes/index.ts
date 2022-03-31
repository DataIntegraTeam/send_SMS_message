import { Router } from "express";

import { smsRoutes } from "./smsRoutes";

// import { authentication } from "../middleware/authentication";

const router = Router();

// router.use(authentication)

router.use('/canais/sms/mensagens', smsRoutes);


export { router };