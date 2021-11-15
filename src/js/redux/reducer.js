import {getStore, updateStore} from './store.js'

function reducer  (action){

    switch(action.type){
        case "delete":
            // grabbing the current store
            const store = getStore()
            const index = action.payload.index
            // cutting the employee from a given object
            const newStore = [...store.slice(0, index), ...store.slice(index + 1)]
            updateStore(newStore)
            action.cb()
        return  "remove video";
        case "edit": 
        return "edit video";
        case "add": 
        return "add new video";
        default: return store
    }

}


export default reducer 