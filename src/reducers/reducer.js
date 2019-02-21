// @flow
import { combineReducers } from 'redux';
import NavigationStateReducer from './navigation';
import CalendarReducer from './calendar';
import GridReducer from './grid';
import NotificationReducer from './notification';

// ## Generator Reducer Imports
import GalleryReducer from './gallery';
import AuthReducer from './auth';

export default combineReducers({
  navigation: NavigationStateReducer,
  calendar: CalendarReducer,
  grid: GridReducer,
  notification: NotificationReducer,
  // ## Generator Reducers

  gallery: GalleryReducer,

  auth: AuthReducer,
});
