
import { loginApi } from "../api/loginApi";



const IS_AUTH = 'loginReducer/IS_AUTH'
const SET_PROFILE = 'loginReducer/SET_PROFILE'
const SET_ERROR = 'loginReducer/SET_ERROR'

const initialState = {
    profile: null,
    isAuth: false,
    error: ''
};


export const loginPageReducer = (state= initialState, action) => {
  switch (action.type) {
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
      }
      case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    default: return state
  }
}





const setAuthSuccess = (isAuth) => ({ type: IS_AUTH, isAuth: isAuth })
const setProfileDataSucces = (profile) => ({ type: SET_PROFILE, profile })
const setError = (error) => ({ type: SET_ERROR, error})


export const logIn = (loginData) => async (dispatch) => {
  try {
    let response = await loginApi.getProfile(loginData)
    dispatch(setError(''))
    dispatch(setProfileDataSucces(response))
    dispatch(setAuthSuccess(true))
  } catch (error) {
   
    dispatch(setError(error))
    dispatch(setAuthSuccess(false))
    } 
}

export default loginPageReducer