import { connect } from 'react-redux';
import { compose, withState } from 'recompose';

import NoteScreen from '../screens/NoteScreen';

export default compose(
  connect(
    state => ({

    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(NoteScreen);
