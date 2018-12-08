import { StyleSheet } from 'react-native'
import { CopperplateBold } from '../../../util/fonts'

export default StyleSheet.create({
  headerContainer: {
    marginBottom: 27
  },
  logo: {
    marginBottom: 40
  },
  logoStep2: {
    marginBottom: 26
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 36
  },
  link: {
    fontFamily: 'Copperplate',
    fontSize: 16,
    color: '#2625ff',
    textDecorationLine: 'underline'
  },
  title: {
    fontFamily: 'Copperplate',
    fontSize: 20,
    lineHeight: 25,
    marginBottom: 20
  },
  subtitle: {
    fontFamily: 'Copperplate',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'center',
    marginBottom: 25
  },
  strong: {
    ...CopperplateBold()
  },
  uploadIcon: {
    borderRadius: 24,
    marginBottom: 18
  },
  avatarPhoto: {
    marginBottom: 18
  },
  uploadContainer: {
    alignItems: 'center'
  },
  photoUploaded: {
    marginBottom: 40,
    borderRadius: 92
  },
  uploadButton: {
    marginBottom: 35
  },
  uploadButtonText: {
    paddingTop: 4
  }
})
