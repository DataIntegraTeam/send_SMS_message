import { Sms } from '../../model/Sms';
import { ISmsRepository } from '../ISmsRepository';
// import { db } from '../../../../database/db';

class SmsRepository implements ISmsRepository {

  private static INSTANCE: SmsRepository;

  private constructor() {
  }
  public static getInstance(): SmsRepository {
    if (!SmsRepository.INSTANCE) {
      SmsRepository.INSTANCE = new SmsRepository();
    }
    return SmsRepository.INSTANCE;
  }

  list(): Sms[] {
    return [
      {
        id: "string",
        from: "string",
        to: "string",
        direction: "IN",
        channel: "string",
        contents: [
          {
            type: "text",
            text: "This is a text.",
            payload: "string",
            encodingStrategy: "AUTO"
          }
        ],
        timestamp: new Date().toISOString(),
      }
    ];
    // try {
    //   const units: Unit[] = db("dbamv.agenda_central").select("*")

    //   return units

    // } catch (error) {
    //   throw new Error("Mensagem descrevendo o erro que ocorreu");
    // }
  }
}

export { SmsRepository }