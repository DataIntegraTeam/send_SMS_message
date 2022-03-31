import { SmsRepository } from "../../repositories/implementations/SmsRepository";
import { SmsController } from "./SmsController";
import { SmsUseCase } from "./SmsUseCase";


const smsRepository = SmsRepository.getInstance();

const smsUseCase = new SmsUseCase(smsRepository);

const smsController = new SmsController(smsUseCase);

export { SmsController };