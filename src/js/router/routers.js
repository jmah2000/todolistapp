import index from '../pages/index.js';
import pageNotFound from '../pages/pageNotFound.js';
import toWatchPage from '../pages/towatch/toWatch.js';
import deletePage from '../pages/delete.js';
import addPage from '../pages/add.js';

const routes = {
    "/": index,
    "/src/": index,
    "/towatch": toWatchPage,
    "/delete": deletePage,
    "/add": addPage
}  

const Router = function (pathname, params=null) {
    
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
            app.appendChild(routes[isValidRoute](params))
        }

}

export default Router