import { EDIT_ELEMENT, ADD_ELEMENT, DELETE_ITEM, FILTER_DATA } from './actions'
import { addNewElement, deleteElement, editElement, filterElements } from './logic'

const initiaState = {
  state: {
    items: [
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
    filteredData: [],
    notFound: false
  }
}

const dataEditoringReducer = (state = initiaState, action) => {
  switch (action.type) {
    case EDIT_ELEMENT: 
      let editedElements = editElement(action.el, state.state.items)
      return {state: { items: editedElements, filteredData: [], notFound: state.state.notFound }}

    case ADD_ELEMENT:
      let newElements = addNewElement(action.el, state.state.items)
      return {state: { items: newElements, filteredData: [], notFound: state.state.notFound }}

    case DELETE_ITEM: 
      let updatedElements = deleteElement(action.elId, state.state.items)
      return {state: { items: updatedElements, filteredData: [], notFound: state.state.notFound }}

    case FILTER_DATA: 
      let filteredData = []
      filteredData = filterElements(action.str, state.state.items)
      return {state: { items: [...state.state.items], filteredData: filteredData.state, notFound: filteredData.notFound }}
    
    default:
      return {state: { items:[...state.state.items], filteredData: [], notFound: state.state.notFound }}
  }
}

export default dataEditoringReducer