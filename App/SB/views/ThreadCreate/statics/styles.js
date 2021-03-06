import { StyleSheet } from 'react-native'
import { CopperplateBold } from '../../../util/fonts'

export default StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#FAFCFE',
    flex: 1,
    flexDirection: 'row'
  },
  contentContainer: {
    paddingTop: 19,
    paddingHorizontal: 16,
    flex: 1
  },
  topRow: {
    flexDirection: 'row'
  },
  commentRow: {
    flex: 1
  },
  comment: {
    minHeight: 40,
    flexWrap: 'wrap'
  },
  threadSelect: {
    flex: 1,
    flexDirection: 'row'
  },
  imagePreviewRow: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    overflow: 'hidden',
    height: 70,
    width: 70
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70
  },
  toolbarLeft: {
    height: 16,
    width: 40
  },
  toolBarRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  link: {
    ...CopperplateBold(),
    fontSize: 16,
    color: '#2625ff'
  },
  title: {
    fontFamily: 'Copperplate',
    fontSize: 34,
    lineHeight: 34,
    marginBottom: 10
  }
})
