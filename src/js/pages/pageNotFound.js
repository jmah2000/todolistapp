import elementCreator from '../components/ui/elementCreator.js'
import link from '../components/ui/link.js'
import bookmarkIcon from '../components/icons/bookmark-icon.js'

const pageNotFound = function ()
{
    const header = document.createElement('header')
    header.classList.add('ui-page-header')
    const buttonDiv = document.createElement('span')
    buttonDiv.classList.add('ui-page-button')
    const h1 = elementCreator('h1', `YouTracker ${bookmarkIcon}`, 'logo')
    const logo = elementCreator('blockquote', 'A Youtube video tracker (basically a bookmarker)', 'logo')

    const errorMsg = elementCreator('p', '404 error: Page not found', 'error')

    const linkElm = link('Take me back!', '/src/','to-home')
    buttonDiv.append(linkElm)


    header.append(h1)
    header.append(logo)
    header.append(buttonDiv)

    return header
}

export default pageNotFound