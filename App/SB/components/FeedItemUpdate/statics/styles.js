import { StyleSheet } from 'react-native'
import { CopperplateBold } from '../../../util/fonts'

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 9,
    paddingLeft: 16,
    paddingVertical: 17,
    backgroundColor: '#EDF1F5'
  },
  textContainer: {
    justifyContent: 'center',
    flexGrow: 1,
    marginLeft: 11
  },
  text: {
    fontFamily: 'Copperplate',
    fontSize: 12
  },
  link: {
    ...CopperplateBold(),
    fontSize: 12,
    color: '#2625ff',
    textDecorationLine: 'underline'
  }
})
