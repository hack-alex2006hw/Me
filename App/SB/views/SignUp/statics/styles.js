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
  bottomLine: {
    marginTop: 32,
    alignItems: 'center'
  },
  bottomLineText: {
    fontFamily: 'Copperplate',
    fontSize: 10,
    lineHeight: 24,
    color: '#000000'
  },
  bottomLineLink: {
    fontFamily: 'Copperplate',
    fontSize: 10,
    lineHeight: 24,
    color: '#000000',
    marginBottom: 16
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: 22,
    color: 'red'
  },
  link: {
    color: '#2625ff'
  },
  strong: {
    ...CopperplateBold()
  },
  footerText: {
    fontFamily: 'Copperplate',
    fontSize: 13,
    color: '#6d6d6d'
  },
  footerLink: {
    fontFamily: 'Copperplate',
    fontSize: 13,
    textDecorationLine: 'underline',
    padding: 10
  }
})
