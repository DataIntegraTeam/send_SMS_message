import { v4 as uuidV4 } from 'uuid';

class Sms {

  id: string;
  from: string;
  to: string;
  direction: "IN";
  channel: string;
  contents: [
    {
      type: string;
      text: string;
      payload: string;
      encodingStrategy: "AUTO"
    }
  ];
  timestamp: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Sms }