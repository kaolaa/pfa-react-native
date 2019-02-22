import axios from 'axios';

const START_ITEMS_LOADING = 'CalendarState/START_ITEMS_LOADING';
const ITEMS_LOADED = 'CalendarState/ITEMS_LOADED';
const LOADING_FAILED = 'CalendarState/LOADING_FAILED';
import {AsyncStorage} from 'react-native';

function startItemsLoading() {
  return {
    type: START_ITEMS_LOADING,
  };
}

function itemsLoaded(items) {
  return {
    type: ITEMS_LOADED,
    items,
  };
}

function itemsLoadingFailed() {
  return {
    type: LOADING_FAILED,
  };
}

function dayOfWeek(thetimestamp) {
  var weekday = new Array(7);
  weekday[0] = "Dimanche";
  weekday[1] = "Lundi";
  weekday[2] = "Mardi";
  weekday[3] = "Mercredi";
  weekday[4] = "Jeudi";
  weekday[5] = "Vendredi";
  weekday[6] = "Samedi";

  return weekday[thetimestamp.getDay()];
}

function getTheTime(num) {
  var time = '';
  switch (num) {
    case 1:
      {
        return '8.30';
        break;
      }
    case 2:
      {
        return '10.15';
        break;
      }
    case 3:
      {
        return '13.15';
        break;
      }
    case 4:
      {
        return '15.00';
        break;
      }
    case 5:
      {
         return '16.45';
        break;
      }
    default:
      break;
  }

}


export function loadItems(day) {
  var data = [];
  const items = {};
var user = {};
  // Do items loading here
  return (dispatch, getState) => {
    AsyncStorage.getItem("userID").then((value) => {
      const id = value 
      axios.get('http://192.168.1.6:5000/api/users/'+ id ).
      then(res => {
         user = res.data 
         console.log('hey user');
         axios.get('http://192.168.1.6:5000/api/seances').
         then(res => {
          data = res.data;

          if (user.role){
            const profile = user.role
             console.log(profile)
              if (profile!=="Etudiant"){
                console.log('hey got seance');
                const dataa =  require('../../../teachertimetable.json');
                data = dataa;
                console.log(data);
              }
            }
          
           if (getState().calendar.items.length > 0) return;
           for (let i = -15; i < 85; i++) {
             const time = day.timestamp + i * 24 * 60 * 60 * 1000;
             const weekday = dayOfWeek((new Date(time)));
             const strTime = (new Date(time)).toISOString().split('T')[0];
             if (!items[strTime]) {
               items[strTime] = [];
               console.log(weekday);
               data.forEach(seance => {
     
                 if (seance.jour === weekday) {
                   console.log('hey')
                   items[strTime].push({
                     name: seance.matiere.nom + `\n` + seance.nomEnseignant,
                     time: getTheTime(seance.seance),
                     labels: `Cours`,
                   });
                 }
               });
             }
           }
           const newItems = {};
           console.log(items)
           Object.keys(items).forEach((key) => {
             newItems[key] = items[key];
     
             console.log(newItems[key])
           });
     
           dispatch(itemsLoaded(newItems));ß
         })
          
      })  
   }).done();



  
  };
}

const defaultState = {
  items: [],
  isLoading: false,
};

export default function CalendarStateReducer(state = defaultState, action) {
  switch (action.type) {
    case START_ITEMS_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case ITEMS_LOADED:
      return Object.assign({}, state, {
        isLoading: true,
        items: action.items,
      });
    default:
      return state;
  }
}