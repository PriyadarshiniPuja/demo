import axios from 'axios';
import config from '../../../config';
import { isEmpty } from 'lodash';

const limit = 100;

export function loading(data) {
  return {
    type: 'LOADING',
    payload: data,
  };
}
export const fetchData = (filter) => async (dispatch) => {
  dispatch(loading(true));
  let apiUrl = config.baseUrl;
  if (filter && !isEmpty(filter)) {
    apiUrl = apiUrl + filter + `&limit=${limit}`;
  }
  let data = await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      return { data };
    })
    .catch((data) => {
      return { data };
    });

  dispatch({
    type: 'FETCH_DATA',
    payload: data,
  });
};
