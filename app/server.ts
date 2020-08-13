import express, { Express, Request, Response, NextFunction } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import path from 'path';
import routes from './routes';
import logger from './logger';

export class ApplicationServer {
  private port: number = 8080;

  constructor(private app: Express) {
    this.app.use('/api/', routes);
    this.app.use(express.static(path.resolve('./') + '/build/frontend'));
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
          error: err.message,
        });
      }
    );
    return this;
  }
  withPort(port: number) {
    this.port = port;
    return this;
  }
  boot(): void {
    this.app.listen(this.port, () =>
      logger.info(`Server listening on port ${this.port}!`)
    );
  }
}
