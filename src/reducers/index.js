import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

// 개발자 도구 창의 Redux-> State-> Tree 에서
// 다음과 같은 내용을 확인할 수 있다.
// counter(pin):0
// isLogged(pin):false

export default allReducers;
