import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1';
const API_KEY = 'bqer03frh5rashj925lg';

export function selectExchange(item){
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    dispatch({ 
      type: 'SELECT_EXCHANGE', payload: item
    });
  };
}

export function selectStock(item){
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    dispatch({ 
      type: 'SELECT_STOCK', payload: item
    });
  };
}

export function startLoading() {
  return(dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    dispatch({type:'START_LOADING'});
  }
}

export function getStocks(code){
  const url = `${API_URL}/stock/symbol`;
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    axios.get(url, {params: {
      exchange: code,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_STOCKS',
        payload: data.slice(1, 10)
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    }).then(() => {
      dispatch({type:'END_LOADING'});
    });
  };
}

export function getPrice(symbol, name){
  const url = `${API_URL}/quote`;
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    axios.get(url, {params: {
      symbol: symbol,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_PRICE',
        payload: name
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    });
  };
}

export function selectPrice(symbol){
  const url = `${API_URL}/quote`;
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    axios.get(url, {params: {
      symbol: symbol,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'SELETE_PRICE',
        payload: data
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    });
  };
}

export function getAbout(symbol){
  const url = `${API_URL}/stock/profile2`;
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    axios.get(url, {params: {
      symbol: symbol,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_ABOUT',
        payload: data
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    });
  };
}

export function getGeneralNews(){
  const url = `${API_URL}/news`;
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    axios.get(url, {params: {
      category: 'general',
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_GENERAL_NEWS',
        payload: data.slice(1,5)
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    });
  };
}

export function getCandle(symbol, from, to){
  const url = `${API_URL}/stock/candle`;
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    axios.get(url, {params: {
      symbol: symbol,
      resolution: 1,
      from: from,
      to: to,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_CANDLE',
        payload: data
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    });
  };
}

export function getCompanyNews(symbol, from, to){
  const url = `${API_URL}/company-news`;
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });

    axios.get(url, {params: {
      symbol: symbol,
      from: from,
      to: to,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_COMPANY_NEWS',
        payload: data
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    }).then(() => {
      dispatch({type:'END_LOADING'});
    })
  };
}

//https://finnhub.io/api/v1/stock/recommendation
export function recommend(symbol){
  const url = `${API_URL}/stock/recommendation`;
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    axios.get(url, {params: {
      symbol: symbol,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_RECOMMENDATION',
        payload: data
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    })
  };
}

export function getPeers(symbol){
  const url = `${API_URL}/stock/peers`;
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    axios.get(url, {params: {
      symbol: symbol,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_PEERS',
        payload: data
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    })
  };
}