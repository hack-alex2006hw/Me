import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export const headerTintColor = Colors.charcoal

export default StyleSheet.create({

  header: {
    // Styles the screen header in Textile Photos feed view
    // backgroundColor: Colors.brandBlue
    backgroundColor: 'white',
    borderBottomColor: '#ECEDEE'
  },
  headerTitle: {
    fontFamily: 'Copperplate-Bold',
    fontSize: 17,
    paddingTop: 8, // <- needed because Copperplate has that weird bottom gap
    color: Colors.charcoal,
    flex: 1,
    textAlign: 'center', // import center-overkill
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  headerTitleLogo: {
    flex: 1,
    justifyContent: 'center', // import center-overkill
    alignSelf: 'center',
    alignItems: 'center'
  },
  headerLogo: {
    width: 82.5,
    height: 23
  },
  headerIconList: {
    width: 23,
    height: 20
  },
  headerIcon: {
    width: 24,
    height: 24
  },
  headerLeft: {
    height: 16,
    width: 40
  },
  backButtonWrapper: {
    paddingVertical: 5
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  moreButtonWrapper: {
    paddingVertical: 2,
    paddingHorizontal: 6
  },
  headerIconPhoto: {
    height: 24,
    width: 27,
    marginRight: 16
  },
  headerIconMore: {
    height: 4,
    marginVertical: 6, // <- makes it more easily clickable
    width: 16
  },
  bottomBar: {
    width: '100%',
    borderTopColor: '#ECEDEE',
    borderTopWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomBarIcon: {
    height: 24,
    width: 24,
    marginHorizontal: 50,
    marginVertical: 14
  },
  bottomBarIconActive: {
    borderBottomColor: '#2625FF',
    borderBottomWidth: 2
  },

  // END SB Styles
  headerTitleImage: {
    marginHorizontal: 16
  },
  headerButton: {
    fontFamily: 'Copperplate',
    color: Colors.charcoal,
    fontSize: 17
  },
  icon: {
    color: Colors.transparent
  },
  tabStyle: {
    backgroundColor: Colors.transparent,
    borderTopWidth: 0,
    borderTopColor: Colors.charcoal,
    position: 'absolute',
    paddingBottom: 8,
    bottom: 0,
    left: 0,
    right: 0
  }
})
