import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoDevicesFound from './no-devices-found';

export const DevicesViewer = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    async function fetchDevices() {
      try {
        const result = await axios('/api/devices');
        const devices = result.data.payload;
        setDevices(devices);
      } catch (err) {}
    }
    fetchDevices();
  }, []);

  return (
    <div className="device-section">
      <div className="device">
        <table width="100%">
          <caption>Devices</caption>
          <thead>
            <tr>
              <th>Vendor ID</th>
              <th>Product ID</th>
              <th>Descriptor Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3}>
                <div className="seperator" />
              </td>
            </tr>
            {devices.length === 0 ? (
              <NoDevicesFound />
            ) : (
              devices.map((device, index) => (
                <tr>
                  <td align="right">{device.attributes.idVendor}</td>
                  <td align="right">{device.attributes.idProduct}</td>
                  <td align="right">{device.attributes.bDescriptorType}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
