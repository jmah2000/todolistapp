import landingPage from '../pages/landingPage.js';
import pageNotFound from '../pages/pageNotFound.js';
import toWatchPage from '../pages/toWatch.js';
import dataFetcher from '../utils/dataFetcher.js';

const Router = async (pathname) => {
    const data = await dataFetcher('http://localhost:3000/videos')

    const routes = {
        "/src/": landingPage(),
        "/toWatch": toWatchPage(data)
    }  

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
            app.appendChild(routes[isValidRoute])
        }

}

export default Router