import { EDIT_ELEMENT, ADD_ELEMENT, DELETE_ITEM, FILTER_DATA } from './actions'
import { addNewElement, deleteElement, editElement, filterElements } from './logic'

const initiaState = {
  state: [
    {
      id: 0,
      text: 'Замена стекла',
      price: 2100,
    },
    {
      id: 1,
      text: 'Замена дисплея',
      price: 2500,
    },
    {
      id: 2,
      text: 'Замена микрофона',
      price: 2500,
    },
    {
      id: 3,
      text: 'Замена аккумулятора',
      price: 4000,
    }
  ],
  filteredData: []
}

const dataEditoringReducer = (state = initiaState, action) => {
  switch (action.type) {
    case EDIT_ELEMENT: 
      state = editElement(action.el, state.state)
      return {state: [...state]}

    case ADD_ELEMENT:
      state = addNewElement(action.el, state.state)
      return {state: [...state]}

    case DELETE_ITEM: 
      state = deleteElement(action.elId, state.state)
      return {state: [...state]}

    case FILTER_DATA: 
      let filteredData = []
      filteredData = filterElements(action.str, state.state)
      
      return {state: [...state.state], filteredData: filteredData}
    
    default:
      return {state: [...state.state]}
  }
}

export default dataEditoringReducer