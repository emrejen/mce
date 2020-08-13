import { BaseAdapter } from '../adapters/base-adapter';
import MCEDevice from './mce-usb';
import { Device } from 'usb';

export default class DeviceService {
  constructor(private adapter: BaseAdapter) {}
  async getConnectedDevices() {
    const list = await this.adapter.list();
    return list.map((device: Device) => new MCEDevice(device));
  }
}
