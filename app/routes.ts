import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';
import path from 'path';
import DeviceService from './devices/devices-service';
import USBAdapter from './adapters/usb.adapter';
import { MCEResult, MCESuccessfulResult } from './commons/mce-result';
import logger from './logger';

const deviceService = new DeviceService(new USBAdapter());
const router = Router();
const indexHtml = `${path.resolve('./')}/build/frontend/index.html`;

router.get('/', (_: Request, res: Response) => {
  res.sendFile(indexHtml);
});

router.get('/devices', async (_: Request, res: Response) => {
  try {
    const devices = await deviceService.getConnectedDevices();
    res.status(OK).send(new MCESuccessfulResult(devices));
  } catch (e) {
    logger.error(`Error: >>>>>> ${e.message}`);
    res.status(BAD_REQUEST).send(new MCEResult(BAD_REQUEST, e.message, []));
  }
});

export default router;
