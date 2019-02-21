import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import TimeTableScreen from '../screens/TimeTableScreen';

export default compose(
  connect(
    state => ({

    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(TimeTableScreen);
