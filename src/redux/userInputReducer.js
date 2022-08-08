import { SET_USER_TEXT, SET_USER_PRICE, EDIT_ELEMENT_CLICK } from './actions'
import { editElementClick } from './logic'

const initiaState = {
    id: '',
    text: '',
    price: '',
    visible: false
}

const userInputReduser = (state = initiaState, action) => {
    switch (action.type) {
        case SET_USER_TEXT: 
            console.log(action.text)
            return {
                ...state,
                text: action.text
            }
        case SET_USER_PRICE:
            return {
                ...state,
                price: action.price
            }
        case EDIT_ELEMENT_CLICK: 
            state = editElementClick(action.el, state)
            return {...state}

        default:
            return state
    }
}

export default userInputReduser