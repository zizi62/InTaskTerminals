import { buyersAPI } from '../api/buyersApi'

const SET_BUYERS = 'buyersPageReducer/SET_BUYERS'
const SET_BUYER_DATA = 'buyersPageReducer/SET_BUYER_DATA'

const initialState = {
  buyers: [],
  buyer: null
}

const buyersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUYERS:
      return { ...state, buyers: action.buyers }
    case SET_BUYER_DATA:
      return { ...state, buyer: action.buyer }
    default:
      return state;
  }

}

export const setBuyersSuccess = (buyers) => ({ type: SET_BUYERS, buyers })
export const setBuyerDataSuccess = (buyer) => ({ type: SET_BUYER_DATA, buyer })


export const getBuyersList = () => (dispatch) => {
  let response = buyersAPI.getBuyers()
  
  dispatch(setBuyersSuccess(response))
}
export const getBuyer = (buyerId) => (dispatch) => {
  let response = buyersAPI.getBuyerData(buyerId)
  dispatch(setBuyerDataSuccess(response))
}

export default buyersPageReducer;