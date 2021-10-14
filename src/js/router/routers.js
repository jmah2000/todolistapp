import landingPage from '../pages/landingPage.js';
import toWatchPage from '../pages/toWatch.js';

const Router = (pathname) => {

    const routes = {
        "/src/": landingPage(),
        "/toWatch": toWatchPage()
    }  

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    console.log(window.location.pathname)
    console.log(routes[window.location.pathname])
    
    app.appendChild(routes[window.location.pathname])

}

export default Router