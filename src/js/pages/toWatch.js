import elementCreator from '../components/ui/elementCreator.js'
import link from '../components/ui/link.js'
import bookmarkIcon from '../components/icons/bookmark-icon.js'
import makeImg from '../utils/makeImg.js'

const toWatchPage = function (data)
{
    // Creating a div for everything
    const watchPage = document.createElement('div')
    watchPage.classList.add('container')

    // Header creation
    const watchPageHeader = document.createElement('header')
    watchPageHeader.classList.add('ui-page-header')

    const h1 = elementCreator('h1', `YouTracker ${bookmarkIcon}`)
    const logo = elementCreator('blockquote', 'A Youtube video tracker (basically a bookmarker)', 'logo')

    // append the header
    watchPageHeader.append(h1)
    watchPageHeader.append(logo)
    watchPage.append(watchPageHeader)

    // create a content container
    const videoContainer = document.createElement('div')
    videoContainer.classList.add('video-container')
    
    // loops for each piece of daya in the json file and appends it to the content div the appends the content div to the watchPage
    data.forEach(data => {

        const content = document.createElement('div')
        content.classList.add('div-content')

        const name = document.createElement('span')
        name.classList.add('name')

        const text = document.createElement('span')
        text.classList.add('text')

        var thumbNail = makeImg(`${data.thumbNail}`, `${data.title}`)
        var title = elementCreator('p', `${data.title}`, 'content')
        var channel = elementCreator('p', `${data.channel}`, 'content')
        var category = elementCreator('p', `Category: ${data.category}`, 'content')
        var dateReleased = elementCreator('p', `Date Released: ${data.dateReleased}`, 'content')
        var dateAdded = elementCreator('p', `Date Added: ${data.dateAdded}`, 'content')
        var videoLength = elementCreator('p', `Video Length: ${data.videoLength}`, 'content')

        content.append(thumbNail)
        text.append(title)
        text.append(channel)
        text.append(category)
        text.append(dateReleased)
        text.append(dateAdded)
        text.append(videoLength)
        content.append(text)
        videoContainer.append(content)
    });

    watchPage.append(videoContainer)

    return watchPage
}

export default toWatchPage