import usb, { Device } from 'usb';
import { BaseAdapter } from './base-adapter';

export default class USBAdapter implements BaseAdapter {
  list(): Device[] {
    return usb.getDeviceList();
  }
}
