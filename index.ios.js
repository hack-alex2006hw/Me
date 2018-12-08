'use strict';
/////
const DEBUG = true;
const CODEPATH = '/index.ios.js';
const thisdateObj = new Date();
const timezone = thisdateObj.getTimezoneOffset();
const TODAY =
  `-${timezone}-` +
  thisdateObj.getUTCFullYear() +
  '.' +
  (thisdateObj.getUTCMonth() + 1) +
  '.' +
  thisdateObj.getUTCDate() +
  ':' +
  thisdateObj.getUTCHours() +
  '.' +
  thisdateObj.getUTCMinutes() +
  '.' +
  thisdateObj.getUTCSeconds() +
  ':' +
  thisdateObj.getUTCMilliseconds();

import { Dimensions, PixelRatio } from 'react-native';
const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const pixelHeight = deviceHeight * pixelRatio;
const pixelWidth = deviceWidth * pixelRatio;
if (DEBUG) console.log(`0.PointLook ${CODEPATH} : `, TODAY);
const PAGE_ID = Math.random()
  .toString()
  .replace(/0./, '');
import DeviceInfo from 'react-native-device-info';
const DEVICE_ID = DeviceInfo.getUniqueID();
const DEVICE_MODEL = DeviceInfo.getModel();
//////
// React
import React, { Component } from 'react';
import { AppRegistry, StatusBar, Platform, AppState } from 'react-native';

import httpServer from './app/httpserver/index';
import exceptionHandler from './exceptionHandler';
const VERSION = AppMetadata.Version;
const ShortVersion = AppMetadata.ShortVersion;
const BundleName = AppMetadata.BundleName;

console.log('     Version: ' + VERSION);
console.log('ShortVersion: ' + ShortVersion);
console.log('  BundleName: ' + BundleName);

///
import App from './app/index';

// http://stackoverflow.com/questions/29408492/is-it-possible-to-combine-react-native-with-socket-io
if (!window.navigator.userAgent) {
  window.navigator.userAgent = `${Platform.OS}`;
}

// http://stackoverflow.com/questions/37311759/error-when-running-firebase-3-0-with-react-native
//
// global.location = { href: '' };
global.screen = {};
global.document = { getElementsByTagName: function() {} };
global.parent = global;
//

// Ensure that there is a global Buffer shareable to all childs
global.Buffer = global.Buffer || require('safe-buffer/').Buffer;
process.nextTick = process.nextTick || setImmediate;

console.disableYellowBox = true;
StatusBar.setBarStyle('light-content');
StatusBar.setHidden(true);

export default class Pointlook extends Component {
  constructor() {
    super();
    this.state = {
      debug: HELLO_PAGE || POINTLOOK_PAGE || SCANNER_PAGE || QRCODE_PAGE
    };
  }
  componentWillMount() {
    httpServer.startHttpServer();
  }
  componentDidMount() {
    httpServer.startHttpServer();
    const stopServer = httpServer.stopHttpServer;
    const startServer = httpServer.startHttpServer;
    AppState.addEventListener('change', state => {
      // console.log('state : ',state);
      if (state === 'active') {
        console.log('service : start');
        startServer();
      }
      if (state === 'background') {
        console.log('service : stop');
        stopServer();
      }
    });

    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 450,
      delay: 100
    });
  }
  componentWillUnmount() {
    httpServer.stopHttpServer();
  }
  render() {
    return <App debug={this.state.debug} />;
  }
}

AppRegistry.registerComponent('Pointlook', () => Pointlook);
