'use strict'

//////
// React
import React from 'react'

import { MainBundlePath, DocumentDirectoryPath, stat } from 'react-native-fs';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive';
import RNFetchBlob from 'react-native-fetch-blob'

const defaultZipFile = 'https://firebasestorage.googleapis.com/v0/b/assets-a3c1e.appspot.com/o/www.zip?alt=media&token=3b362651-9fe6-4551-b0ae-5ff155c8512f';

const fetchAsset = (asset) => {
  const dirs = RNFetchBlob.fs.dirs;
  const sourcePath = dirs.DocumentDir + '/www.zip';
  const iosBundleZip = `${MainBundlePath}/www.zip`;
  const zipFile = asset.zipFile? asset.zipFile : defaultZipFile;
  const targetPath = `${DocumentDirectoryPath}`;
  RNFetchBlob.config({
    // response data will be saved to this path if it has access right.
    path : dirs.DocumentDir + '/www.zip'
    })
    .fetch('GET', zipFile, {
      //some headers ..
    })
    // asset download successful
    .then((res) => {
      console.log('9.getAssets copyAsset FETCHING file saved to ', res.path())
      unzipAsset({zipFile: res.path(), targetPath: targetPath});
      }) // fetch done
      .catch((error) => {
      // fetch error
      console.log('12.getAssets copyAsset FETCH error : ', error);
    }); // RNFetchBlob
  return
}
const unzipAsset = (options) => {
  const sourceFile = options.zipFile;
  const targetPath = options.targetPath;
  console.log('1.getAssets unzipAsset : ', options);
  unzip(sourceFile, targetPath)
    .then((path) => {
      console.log('2.getAssets unzipAsset to ', path)
      return path
    }) // unzip error
    .catch((error) => {
      console.log('3.getAssets unzipAsset error : ', error);
    });
  return
}
const copyAsset = (asset) => {
    const dirs = RNFetchBlob.fs.dirs;
    const sourcePath = dirs.DocumentDir + '/www.zip';
    const iosBundleZip = `${MainBundlePath}/www.zip`;
    const zipFile = asset.zipFile? asset.zipFile : defaultZipFile;
    const targetPath = `${DocumentDirectoryPath}`;
    stat(sourcePath)
    // found ios asset - unzip it
    .then((fileStat) => {
      console.log('1.getAssets fetch Asset FOUND : ', sourcePath);
      unzipAsset({zipFile: sourcePath, targetPath: DocumentDirectoryPath})
    })
    // did not find ios asset
    .catch((err) => {
      console.log('4.getAssets copyAsset NO previous fetch Asset')
      stat(iosBundleZip)
      // found downloaded asset
      .then((fileStat) => {
        if (DEBUG) console.log('5.getAssets copyAsset Asset bundled with xcode build FOUND : ', iosBundleZip);
        unzipAsset({zipFile: iosBundleZip, targetPath: DocumentDirectoryPath})
      })
      // not found asset - download it
      .catch((error) => {
        console.log('8.getAssets copyAsset NO Asset found. FETCHING www.zip ');
        fetchAsset(asset.zipFile);
        copyAsset(asset)
      });
    });
  return
  }

export default { copyAsset, fetchAsset };
