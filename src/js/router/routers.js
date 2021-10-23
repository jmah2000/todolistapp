import landingPage from '../pages/landingPage.js';
import pageNotFound from '../pages/pageNotFound.js';
import toWatchPage from '../pages/toWatch.js';

const routes = {
    "/src/": landingPage,
    "/toWatch": toWatchPage,
}  

const Router = function (pathname) {
    
    const isValidRoute = Object.keys(routes).find(key => key === pathname)
    console.log(isValidRoute)

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