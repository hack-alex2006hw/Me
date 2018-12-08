import { StyleSheet } from 'react-native'
import { CopperplateBold } from '../../../util/fonts'

export default StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#FAFCFE',
    flex: 1
  },
  contentContainer: {},
  toolbarIconUser: {
    width: 24,
    height: 24
  },
  toolbar: {
    paddingHorizontal: 10
  },
  toolbarIconsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 45
  },
  toolbarAddIcon: {
    width: 24,
    height: 24
  },
  toolbarDownloadIcon: {
    width: 22,
    height: 21
  },
  toolbarShareIcon: {
    width: 18,
    height: 19
  },
  toolbarRemoveIcon: {
    width: 14,
    height: 18
  },
  toolbarIconList: {
    width: 23,
    height: 20
  },
  toolbarTitle: {
    fontFamily: 'Copperplate',
    fontSize: 30,
    paddingTop: 23
  },
  fixedDate: {
    fontFamily: 'Copperplate',
    fontSize: 12,
    color: '#4a4a4a',
    paddingLeft: 10,
    paddingBottom: 9,
    paddingTop: 20
  },
  bold: {
    ...CopperplateBold()
  },
  text: {
    fontFamily: 'Copperplate',
    fontSize: 14
  },
  link: {
    ...CopperplateBold(),
    fontSize: 12,
    color: '#2625ff'
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    height: 52,
    borderTopWidth: 1,
    borderColor: '#e1e1e1'
  }
})
