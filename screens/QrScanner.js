'use strict';

import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

import qrcode from '../apis/qrcode'

class QrScanner extends Component {
  static navigationOptions = {
    title: 'Scan QR Code'
  }

  async onSuccess(event) {
    const { data } = await qrcode.post('/api/qr', {
      token: event.data,
      userId: 1
    })

    if (data.status) console.log('Success')
  }

  render() {
    return <QRCodeScanner onRead={this.onSuccess.bind(this)} />
  }
}

export default QrScanner