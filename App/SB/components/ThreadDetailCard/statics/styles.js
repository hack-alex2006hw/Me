import { StyleSheet } from 'react-native'
import { CopperplateBold } from '../../../util/fonts'

export default StyleSheet.create({
  titleCard: {
    fontFamily: 'Copperplate',
    fontSize: 30,
    marginTop: 27,
    marginBottom: 11,
    paddingHorizontal: 11
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 25,
    marginBottom: 9
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 11,
    marginTop: 8,
    marginBottom: 8
  },
  cardAvatar: {
    justifyContent: 'center'
  },
  cardAction: {
    fontFamily: 'Copperplate',
    fontSize: 14,
    lineHeight: 14,
    paddingLeft: 4,
    paddingTop: 4
  },
  cardTargetTouch: {
    flex: 1
  },
  cardTarget: {
    flex: 1,
    fontFamily: 'Copperplate',
    fontSize: 14,
    lineHeight: 14,
    paddingTop: 4
  },
  cardActionName: {
    ...CopperplateBold()
  },
  cardImage: {
    marginBottom: 10,
    overflow: 'hidden'
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 11
  },
  cardFooterTop: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cardFooterTopItem: {
    marginLeft: 11
  },
  profileName: {
    fontFamily: 'Copperplate',
    fontSize: 14,
    lineHeight: 16
  },
  commentCount: {
    fontFamily: 'Copperplate',
    fontSize: 14,
    color: '#9b9b9b',
    lineHeight: 16,
    paddingTop: 6,
    paddingBottom: 8
  },
  likedText: {
    fontFamily: 'Copperplate',
    fontSize: 14,
    lineHeight: 16,
    paddingTop: 6,
    paddingBottom: 2
  },
  cardFooterBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  detailUpdateTime: {
    fontFamily: 'Copperplate',
    fontSize: 10,
    color: '#9b9b9b',
    paddingRight: 8
  },
  dateContainer: {
    backgroundColor: '#FAFCFE',
    paddingBottom: 15
  },
  userPhotosContainer: {
    flexDirection: 'row',
    marginBottom: 8
  },
  cardLeftLine: {
    width: 1,
    height: '100%',
    position: 'absolute',
    zIndex: -10,
    flexDirection: 'column',
    top: 20,
    paddingBottom: 25
  },
  toolbarUserIcon: {
    height: 27,
    width: 27,
    marginRight: 10
  },
  month: {
    fontFamily: 'Copperplate',
    fontSize: 12,
    color: '#9b9b9b',
    marginBottom: 9,
    textAlign: 'center'
  },
  day: {
    fontFamily: 'Copperplate',
    fontSize: 20,
    textAlign: 'center'
  },
  now: {
    fontSize: 16
  },
  imageStretch: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  image: {
    alignItems: 'center',
    padding: 0,
    margin: 0
  }
})
