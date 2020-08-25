import {terminalsApi} from '../api/terminalsApi'
import { v4 as uuidv4 } from 'uuid';

const SET_TERMINALS = 'terminalsPageReducer/SET_TERMINALS'

const initialState = {
    terminals: []
}

const terminalsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TERMINALS:
            return {
                ...state, terminals: action.terminals
            }
        default: return state
    }


}


const setTerminalsSuccess = (terminals)=>({type: SET_TERMINALS, terminals })

export const getTerminalsData = ()=> (dispatch)=>{
  const terminals = terminalsApi.getTerminals()
  dispatch(setTerminalsSuccess(terminals))

}

export const addNewTerminal = (newTerminal)=>(dispatch)=>{
    const id = uuidv4()
    newTerminal.id = id
    const terminals = terminalsApi.getTerminals()
    terminalsApi.setTerminal([...terminals,newTerminal])
    const updatedTerminals = terminalsApi.getTerminals()
    dispatch(setTerminalsSuccess(updatedTerminals))
}

export const deleteTerminal = (terminalId) => (dispatch) =>{
    const terminals = terminalsApi.getTerminals()
    const updatedTerminals = terminals.filter(terminal => terminal.id !== terminalId)
    terminalsApi.setTerminal(updatedTerminals)
    dispatch(setTerminalsSuccess(terminalsApi.getTerminals()))
}

export default terminalsPageReducer