import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import InputField from './components/InputField/InputField';
import List from './components/List/List';
import ListElement from './components/List/ListElement/ListElement';
import { addElement, changePrice, changeText, deleteItem, editElement, editElementClick, filterItems } from './redux/generatorFunctions';

function App() {
  const dispatch = useDispatch()
  const dataStore = useSelector((state) => state.dataElements.state)
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

  const saveHandler = () => {
    if (editDataStore.visible) {
      editItem({
          id: editDataStore.id,
          text: editDataStore.text,
          price: editDataStore.price,
          visible: false
      })
      editItemClick({
          id: '',
          text: '',
          price: '',
          visible: false
      })
    }
    else {
        addItem({text: editDataStore.text, price: (editDataStore.price-0)})
    }
  }
  const cancelHandler = () => {
    editItemClick({
      id: '',
      text: '',
      price: '',
      visible: false
    })
  }

  return (
    <div className="App">
      <InputField editData={editDataStore} onChangeEvent={onChangeEvent}
        addItem={addItem} editItemClick={editItemClick} saveHandler={saveHandler}
        editItem={editItem} filterList={filterList} cancelHandler={cancelHandler}
        notFound={dataStore.notFound} />
        <List elements={dataStore.items} filteredData={dataStore.filteredData}>
          {elements => elements?.map((e, id) => 
        (<ListElement element={e} key={id} editData={editDataStore}
          editItemClick={editItemClick} deleteItem={deleteItemClick} />))}
      </List>
    </div>
  );
}

export default App;
