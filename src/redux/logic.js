export const addNewElement = (el, state) => {
    let temp = state
    temp.push({
        id: state.length,
        text: el.text,
        price: el.price
    })
    return temp
}

export const editElement = (el, state) => {
    let temp = state
    let index = findItemIndex(el, state)
    temp[index] = {
        id: el.id,
        text: el.text,
        price: el.price,
    }
    return temp
}

export const editElementClick = (el, state) => {
    let temp = state
    temp = {
        id: el.id,
        text: el.text,
        price: el.price,
        visible: el.visible
    }
    return temp
}

export const deleteElement = (elId, state) => {
    let temp = state
    let index = 0
    for (let i = 0; i < state.length; i++) {
        if (state[i].id === elId) {
            index = i
            break
        }
    }
    temp.splice(index, 1)
    return temp
}

export const filterElements = (str, state) => {
    let maxValue = 0;
    console.log(str)
    let temp = []
    let eqCounter = []
    for (let i = 0; i < state.length; i++) {
        eqCounter.push(0)
        for (let j = 0; j < str.length; j++) {
            if (str[j] === state[i].text[j])
                eqCounter[i]++
        }
    }
    
    if (Math.max((eqCounter.length) === 0) || (Math.max.apply(null,eqCounter) !== str.length)) {
        alert('Совпадения не найдены!')
        return state
    }
    
    for (let i = 0; i < eqCounter.length; i++) {
        if (maxValue <= eqCounter[i]) {
            maxValue = eqCounter[i]
        }
    }
    for (let i = 0; i < eqCounter.length; i++) {
        if (maxValue === eqCounter[i]) {
            temp.push(state[i])
        }
    }
    return temp
}

const findItemIndex = (el, state) => {
    for (let i = 0; i < state.length; i++) {
        if (state[i].id === el.id)
        return i
    }
}