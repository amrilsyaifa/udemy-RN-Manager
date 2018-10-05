import { combineReducers } from 'redux'
import  AuthReducer from './AuthReducer'
import EmployeeFormReducer from './EmployeeFormReducers'
import EmployeReducer from './EmployeeReducer'

export default combineReducers ({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees : EmployeReducer
})