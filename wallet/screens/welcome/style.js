import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../resources/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBlue,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.white,
  },
});