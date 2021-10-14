import elementCreator from '../components/ui/elementCreator.js'
import link from '../components/ui/link.js'
import bookmarkIcon from '../components/icons/bookmark-icon.js'
import dataFetcher from '../utils/dataFetcher.js'
import createTab from '../utils/createBookmark.js'

const toWatchPage = function ()
{
    // Header creation
    const watchPage = document.createElement('header')
    watchPage.classList.add('ui-page-header')

    const h1 = elementCreator('h1', `YouTracker ${bookmarkIcon}`)
    const logo = elementCreator('blockquote', 'A Youtube video tracker (basically a bookmarker)', 'logo')
    
    // Content Creation


    const data = dataFetcher('http://localhost:3000/videos')
    console.log(data)
    //const title = [data]
    //console.log(title)

    // append all the data/content
    watchPage.append(h1)
    watchPage.append(logo)

    return watchPage
}

export default toWatchPage