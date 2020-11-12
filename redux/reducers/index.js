import {combineReducers} from 'redux'
import employeeReducer from './employeeReducer'

const rootReducer = combineReducers({
    employeeData: employeeReducer
});
export default rootReducer;
