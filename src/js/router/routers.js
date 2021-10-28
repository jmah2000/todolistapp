import index from '../pages/index.js';
import pageNotFound from '../pages/pageNotFound.js';
import toWatchPage from '../pages/towatch/toWatch.js';

const routes = {
    "/": index,
    "/src/": index,
    "/towatch": toWatchPage,
}  

const Router = function (pathname) {
    
    const isValidRoute = Object.keys(routes).find(key => key === pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    if(isValidRoute === undefined)
        {
            app.appendChild(pageNotFound())
        }
        else
        {
            app.appendChild(routes[isValidRoute]())
        }

}

export default Router