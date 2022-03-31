import { Sms } from "../model/Sms";

interface ISmsRepository {
  list(): Sms[];
  // list(): Promise<Unit[]>;
}

export { ISmsRepository }