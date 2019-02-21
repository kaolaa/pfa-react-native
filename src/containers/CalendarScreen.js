import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import * as AuthStateActions from '../reducers/auth';

import { loadItems } from '../reducers/calendar';

import CalendarScreen from '../screens/CalendarScreen';

export default 
  connect(
    state => ({
      items: state.calendar.items,
    }),
    dispatch => ({
      loadItems: items => dispatch(loadItems(items)),
      authStateActions: bindActionCreators(AuthStateActions, dispatch),
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    }),
  )
(CalendarScreen);
