import elementCreator from '../components/ui/elementCreator.js'
import bookmarkIcon from '../components/icons/bookmark-icon.js'
import trashIcon from '../components/icons/trash-icon.js'
import editIcon from '../components/icons/edit-icon.js'
import makeImg from '../utils/makeImg.js'
import anchor from '../components/ui/anchor.js'
import button from '../components/ui/button.js'
import videoAddIcon from '../components/icons/video-add.js'
import { getStore } from '../utils/store.js'

const toWatchPage = function ()
{

    let data = getStore()

    // Creating a div for everything
    const watchPage = document.createElement('div')
    watchPage.classList.add('container')

    // Header creation
    const watchPageHeader = document.createElement('header')
    watchPageHeader.classList.add('ui-page-header')

    // Create a space for the footer
    const footer = document.createElement('footer')
    footer.classList.add('footer')

    const h1 = elementCreator('h1', `YouTracker ${bookmarkIcon}`, 'logo')
    const logo = elementCreator('blockquote', 'A Youtube video tracker (basically a bookmarker)', 'logo')

    // append the header
    watchPageHeader.append(h1)
    watchPageHeader.append(logo)
    watchPage.append(watchPageHeader)

    // create a content container
    const videoContainer = document.createElement('ul')
    videoContainer.classList.add('video-container')
    
    // loops for each piece of daya in the json file and appends it to the content div the appends the content div to the watchPage
    data.forEach(data => {

        const content = document.createElement('li')
        content.classList.add('video')

        // creates a span to hold all the details of the video
        const text = document.createElement('span')
        text.classList.add('text')

        // UD part of crud for icons. (Update and Delete)
        const ud = document.createElement('span')
        ud.classList.add('ud-icon')

        // this span is for the delete/edit icons
        const clickables = document.createElement('span')
        clickables.classList.add('clickables')

        console.log(window.location.pathname)

        // Create thumbnail with pathing
        var thumbNail = makeImg(data.thumbNail, data.title)

        var link2video = anchor("", data.link)

        var title = elementCreator('p', `${data.title}`, 'content')

        link2video.append(title)

        var channel = elementCreator('p', `${data.channel}`, 'content')
        var category = elementCreator('p', `Category: ${data.category}`, 'content')
        var dateReleased = elementCreator('p', `Date Released: ${data.dateReleased}`, 'content')
        var dateAdded = elementCreator('p', `Date Added: ${data.dateAdded}`, 'content')
        var videoLength = elementCreator('p', `Video Length: ${data.videoLength}`, 'content')


        // Appends the details of each video into the text variable then appends the text variable to the content variable
        content.append(thumbNail)
        text.append(link2video)
        text.append(channel)
        text.append(category)
        text.append(dateReleased)
        text.append(dateAdded)
        text.append(videoLength)
        if (data.isComplete == true)
        {
            var videoStatus = elementCreator('p', `Video watched`, 'content video-status-true')
            text.append(videoStatus)
        }
        else 
        {
            var videoStatus = elementCreator('p', `Video watched not watched`, 'content video-status-false')
            text.append(videoStatus)
        }
        content.append(text)

        // Creation and addition of the icons
        const editButton = button(editIcon, 'icon')
        const trashButton = button(trashIcon, 'icon')

        ud.append(editButton)
        ud.append(trashButton)
        content.append(ud)

        // final append for each video before the final-final append to the DOM
        videoContainer.append(content)
    });

    // Create and append a footer
    const videoAddButton = button(videoAddIcon, 'icon')

    footer.append(videoAddButton)


    watchPage.append(videoContainer)
    watchPage.append(footer)

    return watchPage
}

export default toWatchPage