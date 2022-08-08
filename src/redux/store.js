import userInputReducer from './userInputReducer'
import dataEditoringReducer from './dataEditoringReducer'

import {
    legacy_createStore,
    combineReducers,
    compose
} from 'redux'

const ReactReduxDevTools = window.
__REDUX_DEVTOOLS_EXTENSIONS__ && window.
__REDUX_DEVTOOLS_EXTENSIONS__()

function configureStore() {
    return legacy_createStore(
        combineReducers({
            userInput: userInputReducer,
            dataElements: dataEditoringReducer
        }),
        undefined,
        compose(ReactReduxDevTools)
    )
}

export default configureStore