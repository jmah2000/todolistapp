import Router from "./router/routers.js";
import { createStore } from "./utils/store.js";
import dataFetcher from './utils/dataFetcher.js';

const app = document.querySelector("#app")

const appInit = async function(e)
{

    let videoData = await dataFetcher('http://localhost:3000/videos')

    createStore(videoData)

    Router(window.location.pathname)

}

window.addEventListener('load', appInit)