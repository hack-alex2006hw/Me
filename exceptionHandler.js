import RNRestart from 'react-native-restart';
import {setJSExceptionHandler, getJSExceptionHandler} from 'react-native-exception-handler';
import {setNativeExceptionHandler} from 'react-native-exception-handler/index';

console.log('1.exceptionHandler Initiated : ', new Date().toString())
setJSExceptionHandler(errorHandler)
setNativeExceptionHandler((error) => {
  //NOTE: alert or showing any UI change via JS
  //WILL NOT WORK in case of NATIVE ERRORS.
  console.log('Native Exception : ', error)
})
const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
        '>> SYSTEM ERROR <<',
        `
        ERROR: ${(isFatal) ? 'FATAL:' : ''} ${e.name} ${e.message}

        SYSTEM RESTART REQUIRED.
        `,
      [{
        text: '>> PLEASE RESTART <<',
        onPress: () => {
          RNRestart.Restart();
        }
      }]
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
}

