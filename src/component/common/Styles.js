import {StyleSheet, Platform} from 'react-native';
export default StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  TextInputStyleClass: {
    color: '#77909F',
    textAlign: 'left',
    height: 40,
    borderWidth: 1.5,
    // Set border Hex Color Code Here.
    borderColor: '#77909F',
    backgroundColor: 'transparent',
    // Set border Radius.
    borderRadius: 5,
    margin: 5,
    fontSize: 16,
    paddingLeft: 15,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    width: 200,
    height: 120,
    padding: 50,
    resizeMode: 'contain',
  },
  loginButton: {
    height: 50,
    backgroundColor: '#2493C5',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  Icon: {
    flex: 1,
    alignItems: 'center',
    width: 175,
    height: 100,
    padding: 50,
    resizeMode: 'contain',
  },
  outerTabIcon: {
    height: 25,
    width: 25,
  },
  innerTabIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  backButton: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#76909D',
  },
  titleHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#76909D',
    padding: 10,
  },
  icon: {
    height: Platform.OS === 'ios' ? 25 : 24.2,
    width: Platform.OS === 'ios' ? 25 : 24.65,
    resizeMode: 'contain',
  },
  positionCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderColorGrey: {
    borderColor: '#cccccc',
  },
  marginTop10: {
    marginTop: 10,
  },
  borderTopWidth1: {
    borderTopWidth: 1,
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  fontSize20: {
    fontSize: 20,
  },
  fontSize18: {
    fontSize: 18,
  },
  colorGrey: {
    color: '#252E2D',
  },
  colorGreyLight: {
    color: '#3B4342',
  },
  colorText: {
    color: '#77909F',
  },
  colorBlue: {
    color: '#2394C7',
  },
  buttonBackgroundColorGrey: {
    backgroundColor: '#77909F',
  },
  buttonBackgroundColorBlue: {
    backgroundColor: '#2394C7',
  },
  borderBottomWidth1: {
    borderBottomWidth: 1,
  },
  flex1flexDirectionRow: {
    flex: 1,
    flexDirection: 'row',
  },
  mapMyLocationCustomButton: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 1,
    position: 'absolute',
    margin: Platform.OS === 'ios' ? 15 : 10,
  },
  formLabel: {
    color: '#2196F3',
    fontSize: 16,
    includeFontPadding: false,
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 10,
  },
  input: {
    borderColor: '#2196F3',
    borderBottomWidth: 1.5,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
  },
  flex1: {
    flex: 1,
  },
});
