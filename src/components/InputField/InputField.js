
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
                
            <button onClick={() => {props.saveHandler()}}>Сохранить</button>
            <button className={props.editData.visible ? 'visible' : 'hidden'}
                onClick={() => {props.cancelHandler()}}>
            Отмена</button>

            <p>Фильтр</p>
            <input className="filter-input" 
                onChange={(e) => { props.filterList(e.target.value) }} />
            <p className={(props.notFound) ? 'visible' : 'hidden'}>Совпадения не найдены</p>
        </div>
    );
}

export default InputField;
