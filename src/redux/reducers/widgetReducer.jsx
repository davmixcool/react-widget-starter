export default function reducer(state={

  fetching: false,
  fetched: false,
  data:[]

}, action) {




  switch (action.type) {



    case "WIDGET_CLICK": {
      return {...state};
    }


    case "FETCH_WIDGET_DATA_PENDING": {
      return {...state, fetching:true};

      break;
    }
    case "FETCH_WIDGET_DATA_REJECTED": {
      return {...state, fetching:false}
      break;
    }
    case "FETCH_WIDGET_DATA_FULFILLED": {

      return {...state,data:action.payload.data}

      break;
    }
    default: {
      return state;
    }

  }



};
