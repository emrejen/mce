import { Device } from 'usb';

type MCEDeviceType = {
  idVendor: number;
  idProduct: number;
  bDescriptorType: number;
};

export default class MCEDevice {
  attributes: MCEDeviceType | null = null;

  constructor(device: Device) {
    const { idVendor, idProduct, bDescriptorType } = device.deviceDescriptor;
    this.attributes = { idVendor, idProduct, bDescriptorType };
  }
}
