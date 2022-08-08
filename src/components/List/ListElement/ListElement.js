
function ListElement(props) {
    return (
      <li className="ListElement">
        <p>{props.element.text + ' ' + props.element.price}</p>
        <button  disabled={props.editData.visible}
        onClick={() => {
            props.editItemClick({
                id: props.element.id,
                text: props.element.text,
                price: props.element.price,
                visible: true
            })
        }}>
          Редактировать</button>
        <button 
        onClick={() => {
          props.deleteItem(props.element.id)
        }}
        disabled={props.editData.visible}>
          Удалить</button>
      </li>
    );
  }
  
  export default ListElement;
  