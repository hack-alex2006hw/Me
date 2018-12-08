import { Platform } from 'react-native'

export const CopperplateBold = () => {
  if (Platform.OS === 'android') {
    return {
      fontFamily: 'Copperplate Bold'
    }
  } else {
    return {
      fontFamily: 'Copperplate',
      fontWeight: '700'
    }
  }
}
