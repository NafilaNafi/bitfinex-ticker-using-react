import { combineReducers } from "redux";

import { reducer as rootReducer, NAME as ROOT_NAME } from "./modules/Root";
import { reducer as tickerReducer, NAME as TICKER_NAME } from "./modules/Ticker";


export default combineReducers({
  [ROOT_NAME]: rootReducer,
  [TICKER_NAME]: tickerReducer
});
