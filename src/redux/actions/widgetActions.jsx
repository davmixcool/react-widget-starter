import axios from 'axios';

export function fetch() {
  return {
    type:"FETCH_WIDGET_DATA",
    payload:axios.get("/data")
  }
}


export function click(id) {
  return {
    type:"WIDGET_CLICK",
    payload:id
  }
}
