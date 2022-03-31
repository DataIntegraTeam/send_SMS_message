import { Sms } from '../../model/Sms';
import { ISmsRepository } from '../../repositories/ISmsRepository';

type TSmsUseCase = { data: Sms[] }

class SmsUseCase {

  constructor(private smsRepository: ISmsRepository) { }

  execute(): TSmsUseCase {
    const units = this.smsRepository.list();

    const data: TSmsUseCase = { data: units }
    return data;
  }
}

export { SmsUseCase }