import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import InputField from './components/InputField/InputField';
import List from './components/List/List';
import ListElement from './components/List/ListElement/ListElement';
import { addElement, changePrice, changeText, deleteItem, editElement, editElementClick, filterItems } from './redux/generatorFunctions';

function App() {
  const dispatch = useDispatch()
  const dataStore = useSelector((state) => state.dataElements)
  const editDataStore = useSelector((state) => state.userInput)

  const onChangeEvent = (type, input) => {
    switch (type) {
      case 'text': 
        dispatch(changeText(input))
        break
      case 'price': 
        dispatch(changePrice(input))
        break
      default:
        break
    }
  }
  const addItem = (element) => {
    dispatch(addElement(element))
  }
  const editItemClick = (element) => {
    dispatch(editElementClick(element))
  }
  const editItem = (element) => {
    dispatch(editElement(element))
  }
  const deleteItemClick = (elId) => {
    dispatch(deleteItem(elId))
  }
  const filterList = (str) => {
    dispatch(filterItems(str))
  }

  return (
    <div className="App">
      <InputField editData={editDataStore} onChangeEvent={onChangeEvent}
        addItem={addItem} editItemClick={editItemClick}
        editItem={editItem} filterList={filterList}/>
        <List elements={dataStore}>
          {elements => elements?.map((e, id) => 
        (<ListElement element={e} key={id} editData={editDataStore}
          editItemClick={editItemClick} deleteItem={deleteItemClick} />))}
      </List>
    </div>
  );
}

export default App;
