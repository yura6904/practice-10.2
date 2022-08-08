
function List(props) {
    return (
      <ul className="List">
        {!props.elements.filteredData ? (
          props.children(props.elements.state)
        ) : (props.children(props.elements.filteredData))}
      </ul>
    );
  }
  
  export default List;
  