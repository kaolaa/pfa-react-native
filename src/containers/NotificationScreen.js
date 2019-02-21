import { connect } from 'react-redux';

import NotificationScreen from '../screens/NotificationScreen';

import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';

export default connect(
  state => ({
  }),
  dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
  }),
)(NotificationScreen);
