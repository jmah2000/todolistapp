import landingpage from '../pages/landingPage.js';
import pagenotfound from '../pages/pageNotFound.js';
import towatchpage from '../pages/toWatch.js';

const routes = {
    "/src/": landingpage,
    "/toWatch": towatchpage,
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
            app.appendChild(pagenotfound())
        }
        else
        {
            app.appendChild(routes[isValidRoute]())
        }

}

export default Router