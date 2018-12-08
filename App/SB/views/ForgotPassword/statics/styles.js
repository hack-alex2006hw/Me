import { StyleSheet } from 'react-native'
import { CopperplateBold } from '../../../util/fonts'

export default StyleSheet.create({
  formContainer: {
    width: '100%',
    paddingHorizontal: 36
  },
  headerText: {
    fontFamily: 'Copperplate',
    fontSize: 16,
    lineHeight: 25
  },
  link: {
    ...CopperplateBold(),
    color: '#2625ff'
  },
  button: {
    marginTop: 8
  },
  bottomLine: {
    alignItems: 'center'
  },
  footerText: {
    fontFamily: 'Copperplate',
    fontSize: 13,
    color: '#6d6d6d'
  },
  footerLink: {
    fontFamily: 'Copperplate',
    fontSize: 13,
    textDecorationLine: 'underline'
  }
})
