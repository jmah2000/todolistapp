import {getStore, updateStore} from './store.js'

function reducer  (action){

    switch(action.type){
        case "delete":
            // grabbing the current store
            const deleteStore = getStore()
            const deleteIndex = action.payload.index
            // cutting the employee from a given object
            const deleteNewStore = [...deleteStore.slice(0, deleteIndex), ...deleteStore.slice(deleteIndex + 1)]
            updateStore(deleteNewStore)
            action.cb()
        return  "remove video";

        case "edit": 
            const editStore = getStore()
            const editindex = action.payload.selectedVideoIndex
            console.log(action.payload.tempObj)
            const editNewStore = [...editStore.slice(0, editindex), action.payload.tempObj, ...editStore.slice(editindex + 1)]
            console.log(editStore[editindex] + 1)
            console.log(editNewStore)
            updateStore(editNewStore)
            action.cb()
        return "edit video";

        case "add":
            const addStore = getStore()
            const addVideo = addStore.push(action.payload.tempObj)
            action.cb()
        return "add new video";

        default: return store
    }

}


export default reducer 