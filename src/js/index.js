import Router from "./router/routers.js";
import { createStore } from "./redux/store.js";
import dataFetcher from './utils/dataFetcher.js';

const app = document.querySelector("#app")

const appInit = async function(e)
{

    let videoData = await dataFetcher('./data/toDo.json')

    createStore(videoData['videos'])
    
    Router(window.location.pathname)

}

window.addEventListener('load', appInit)