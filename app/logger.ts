import winston, { createLogger, format, transports } from 'winston';
import { isProductionMode } from './env';

const { File, Console } = transports;

const formatLoggerForProduction = (logger: winston.Logger) => {
  const fileFormat = format.combine(format.timestamp(), format.json());
  const errTransport = new File({
    filename: './logs/error.log',
    format: fileFormat,
    level: 'error',
  });
  const infoTransport = new File({
    filename: './logs/combined.log',
    format: fileFormat,
  });
  logger.add(errTransport);
  logger.add(infoTransport);
};

const formatLoggerForDevelopment = (logger: winston.Logger) => {
  const errorStackFormat = format((info) => {
    if (info.stack) {
      // tslint:disable-next-line:no-console
      console.log(info.stack);
      return false;
    }
    return info;
  });
  const consoleTransport = new Console({
    format: format.combine(
      format.colorize(),
      format.simple(),
      errorStackFormat()
    ),
  });
  logger.add(consoleTransport);
};

const logger = createLogger({
  level: 'info',
});

isProductionMode()
  ? formatLoggerForProduction(logger)
  : formatLoggerForDevelopment(logger);

export default logger;
