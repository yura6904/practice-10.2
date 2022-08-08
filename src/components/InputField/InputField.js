
function InputField(props) {

    return (
        <div className="InputField">
            <div>
                <p>Название услуги</p>
                <p>Стоимость</p>
            </div>
            <input className="text-of-service" value={props.editData.text}
                onChange={(e)=>{props.onChangeEvent('text', e.target.value)}} />
            <input className="price-of-service" type='number' value={props.editData.price}
                onChange={(e)=>{props.onChangeEvent('price', e.target.value)}} />
                
            <button
                onClick={() => {
                    if (props.editData.visible) {
                        props.editItem({
                            id: props.editData.id,
                            text: props.editData.text,
                            price: props.editData.price,
                            visible: false
                        })
                        props.editItemClick({
                            id: '',
                            text: '',
                            price: '',
                            visible: false
                        })
                    }
                    else {
                        props.addItem({text: props.editData.text, price: (props.editData.price-0)})
                    }
                }}>
            Сохранить</button>
            <button className={props.editData.visible ? 'visible' : 'hidden'}
                onClick={() => {
                    props.editItemClick({
                        id: '',
                        text: '',
                        price: '',
                        visible: false
                    })
                }}>
            Отмена</button>
            <p>Фильтр</p>
            <input className="filter-input" 
                onChange={(e) => { if (e.target.value !== '') props.filterList(e.target.value)}} />
        </div>
    );
}

export default InputField;
