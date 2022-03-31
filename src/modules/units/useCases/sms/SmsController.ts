import { Request, Response } from "express";

import { SmsUseCase } from './SmsUseCase';

class SmsController {
  constructor(private smsUseCase: SmsUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const all = this.smsUseCase.execute();

      return response.status(200).json(all);
    } catch (error) {
      return response.status(500).json({
        message: error.message || "Mensagem descrevendo o erro que ocorreu!"
      })
    }
  }
}

export { SmsController }