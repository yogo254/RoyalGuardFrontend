import { combineReducers } from "redux";
import context from "./ContextReducer";
import guards from "./GuardReducer";
import sessions from "./SessionReducer";
const rootReducer = combineReducers({ context, guards, sessions });

export default rootReducer;
