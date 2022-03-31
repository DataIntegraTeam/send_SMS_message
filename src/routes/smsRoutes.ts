import { Router } from 'express';
import { SmsController } from '../modules/units/useCases/sms';

const smsRoutes = Router();

smsRoutes.post('/sms', (request, response) => {
  return SmsController.call(request, response);
})

export { smsRoutes };