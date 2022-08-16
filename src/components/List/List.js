
function List(props) {
    return (
      <ul className="List">
        {!props.filteredData.length ? (
          props.children(props.elements)
        ) : (props.children(props.filteredData))}
      </ul>
    );
  }
  
  export default List;
  