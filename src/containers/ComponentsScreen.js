import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { compose, withState } from 'recompose';

import * as AuthStateActions from '../reducers/auth';

import ComponentsScreen from '../screens/ComponentsScreen';

export default compose(
  connect(
    state => ({

    }),
    dispatch => ({
      authStateActions: bindActionCreators(AuthStateActions, dispatch),
    }),
  ),
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ComponentsScreen);
