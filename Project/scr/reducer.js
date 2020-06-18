import produce from 'immer';

const initialState = {
  stocks: null,
  generalNews: null,
  priceList: [],
  exchange: null,
  stock: null,
  price: {c: 0, h: 0, l: 0, o: 0, pc: 0, t:0},
  companyNews: null,
  candleData: null,
  about: null,
  loading: false,
  recommendation: [],
  peers: [],
  error: null,
  item: null,
  interested: [],
};

const reducer = produce((state, action) => {
  console.log(action);
  switch(action.type) {
    case 'SELECT_EXCHANGE':
      state.exchange = action.payload;
      break;
    case 'GET_STOCKS':
      state.stocks = action.payload;
      break;
    case 'SELECT_STOCK':
      state.stock = action.payload;
      break;
    case 'GET_PRICE':
      state.priceList.push(action.payload);
      break;
    case 'SELETE_PRICE':
      state.price = action.payload;
      break;
    case 'GET_GENERAL_NEWS':
      state.generalNews = action.payload;
      break;
    case 'GET_COMPANY_NEWS':
      state.companyNews = action.payload;
      break;
    case 'GET_CANDLE':
      state.candleData = action.payload;
      break;
    case 'GET_ABOUT':
      state.about = action.payload;
      break;
    case 'GET_RECOMMENDATION':
      state.recommendation = action.payload;
      break;
    case 'GET_PEERS':
      state.peers = action.payload;
      break;
    case 'SET_ITEM':
      state.item = action.payload;
      break;
    case 'SET_INTERESTED':
      state.interested.push(action.payload);
      break;
    case 'ERROR':
        state.error = action.payload;
        break;
    case 'CLEAR_ERRORS':
        state.error = null;
        break;
    case 'START_LOADING':
      state.loading = true;
      break;
    case 'END_LOADING':
      state.loading = false;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;