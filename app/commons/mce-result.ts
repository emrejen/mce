import { OK } from 'http-status-codes';

export class MCEResult {
  static SUCCESS = 'success';
  constructor(
    public status: number,
    public message: string | null = '',
    public payload?: any
  ) {}
}

export class MCESuccessfulResult extends MCEResult {
  constructor(public payload: any) {
    super(OK, 'success', payload);
  }
}
