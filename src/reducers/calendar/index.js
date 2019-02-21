const START_ITEMS_LOADING = 'CalendarState/START_ITEMS_LOADING';
const ITEMS_LOADED = 'CalendarState/ITEMS_LOADED';
const LOADING_FAILED = 'CalendarState/LOADING_FAILED';

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

const names = ['Max', 'Philip', 'Alex', 'Irina', 'Vovan'];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const labels = ['TP', 'Cours'];

export function loadItems(day) {
  // Do items loading here
  return (dispatch, getState) => {
    if (getState().calendar.items.length > 0) return;

    const items = {};

    for (let i = -15; i < 85; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = (new Date(time)).toISOString().split('T')[0];
      if (!items[strTime]) {
        items[strTime] = [];
        // const numItems = randomNumber(0, 5);
        // for (let j = 0; j < numItems; j++) {
        //   items[strTime].push({
        //     name: `Meeting with ${names[randomNumber(0, 4)]}`,
        //     time: `${randomNumber(0, 24)}:${randomNumber(0, 60)}`,
        //     labels: randomNumber(0, 1) ? [labels[randomNumber(0, 1)]] : [],
        //   });
        // }
        const tableData = [
          [
            'Lundi',
            "Systemes d'information geographique \nagdal - 4B\n8.30 - 10.00",
            "Systemes d'information geographique \nagdal\n4B",
            '',
            'administartion oracle\nbourgegrag\ncc3',
            'Etude de cas \nbourgegrag\ncc4',
          ],
          ['Mardi', 'JAVA Avancee\nbourgegrag\ncc1', 'JAVA Avancee\nbourgegrag\nLR', '', '', ''],
          ['Mercredi', 'Administration UNIX \nbourgegrag\ncc3', 'Atelier oracle\nbourgegrag\ncc1', '', '', ''],
          ['Jeudi', 'Droit des affaires\nbourgegrag\n4b', 'Anglais\nbourgegrag\n4b', 'Virtualisation\nbourgegrag\ncc3', '', ''],
          ['Vendredi', 'Gestion de projet\nbourgegrag\n6b', 'TEC\nbourgegrag\n4b', '', '', ''],
          ['Samedi', 'Reseaux haut debits\nbourgegrag\ncc3', '', '', '', ''],
        ]
        items[strTime].push({
          name: `Systemes d'information \n\ngeographique`,
          time: `8.30`,
          labels: `Cours` ,
        });
        items[strTime].push({
          name: `JAVA Avancee`,
          time: `10.45`,
          labels: `TP` ,
        });items[strTime].push({
          name: `Droit des affaires`,
          time: `14.30`,
          labels: `Cours` ,
        });items[strTime].push({
          name: `Gestion de projet`,
          time: `16.45`,
          labels: `Cours` ,
        });
      }
    }

    const newItems = {};
    Object.keys(items).forEach((key) => { newItems[key] = items[key]; });

    dispatch(itemsLoaded(newItems));
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
