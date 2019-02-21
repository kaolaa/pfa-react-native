import { connect } from 'react-redux';
import { compose, withState } from 'recompose';

import ProfileScreen from '../screens/ProfileScreen';

export default compose(
  connect(
    state => ({

    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(ProfileScreen);
