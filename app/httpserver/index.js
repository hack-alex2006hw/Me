'use strict'

import http from 'react-native-httpserver'
import GetAssets from './getAssets'

var server

const zipFile = 'https://firebasestorage.googleapis.com/v0/b/assets-a3c1e.appspot.com/o/www.zip?alt=media&token=3b362651-9fe6-4551-b0ae-5ff155c8512f';
const HTTP_OPTS = {port: "8899", root: "DOCS", zipFile: zipFile}; // BUNDLE | DOCS


const startHTTP = () => {
  // console.log('2.httpServer copyAsset : ', HTTP_OPTS);
  http.start(HTTP_OPTS);
}

const stopHttpServer = () => http.stop();
const startHttpServer = () => {
  // console.log('1.httpServer : ', HTTP_OPTS);
  const { copyAsset, fetchAsset } = GetAssets;
  // fetchAsset(HTTP_OPTS.zipFile);
  copyAsset(HTTP_OPTS);
  startHTTP(HTTP_OPTS, (result) => { return result });
}

export default { startHttpServer, stopHttpServer };
