import landingPage from '../pages/landingPage.js';
import toWatchPage from '../pages/toWatch.js';
import dataFetcher from '../utils/dataFetcher.js';

const Router = async (pathname) => {
    const data = await dataFetcher('http://localhost:3000/videos')
    const routes = {
        "/src/": landingPage(),
        "/toWatch": toWatchPage(data)
    }  
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    app.appendChild(routes[window.location.pathname])

}

export default Router