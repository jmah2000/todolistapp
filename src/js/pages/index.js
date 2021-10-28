import elementCreator from '../components/ui/elementCreator.js'
import link from '../components/ui/link.js'
import bookmarkIcon from '../components/icons/bookmark-icon.js'

const index = function ()
{
    const header = document.createElement('header')
    header.classList.add('ui-page-header')
    const buttonDiv = document.createElement('span')
    buttonDiv.classList.add('ui-page-button')
    const h1 = elementCreator('h1', `YouTracker ${bookmarkIcon}`, 'logo')
    const logo = elementCreator('blockquote', 'A Youtube video tracker (basically a bookmarker)', 'logo')
    const linkElm = link('To Video Tracker App', '/towatch','to-video')
    buttonDiv.append(linkElm)

    header.append(h1)
    header.append(logo)
    header.append(buttonDiv)

    return header
}

export default index