import { simpleButton } from "../components/ui/button.js";
import Router from "../router/routers.js";
import { getStore } from "../redux/store.js";
import bookmarkIcon from '../components/icons/bookmark-icon.js'
import elementCreator from '../components/ui/elementCreator.js'
import makeImg from "../utils/makeImg.js";
import anchor from "../components/ui/anchor.js";
import reducer from "../redux/reducer.js";

const cancelButton = simpleButton("cancel", "crud-button")
const deleteButton = simpleButton("fully delete", "crud-button")


const deletePage = function (passedVideoId)
{
    const datas = getStore();

    const domDelete = document.createElement('header')
    domDelete.classList.add('ui-page-header')
    const buttonDiv = document.createElement('span')
    buttonDiv.classList.add('ui-page-button')

    const h1 = elementCreator('h1', `YouTracker ${bookmarkIcon}`, 'logo')
    const logo = elementCreator('blockquote', 'A Youtube video tracker (basically a bookmarker)', 'logo')
    const pageTitle = elementCreator('blockquote', 'Deleting a video', 'logo')


    // UD PAGE HANDLERS
    function onDeleteCancel(e){
        Router('/')
    }

    function onDeleteVideo(e){

        const index = getStore().findIndex((video)=>{
            return (video.id == passedVideoId.id)
        })

        const actions = {
            type:"delete",
            payload:{index},
            cb:()=> Router('/')
        }

        reducer(actions)

    }


    const videoContainer = document.createElement('ul')
    videoContainer.classList.add('video-container')

    datas.forEach(data => {

        if(data.id == passedVideoId.id)
        {
            const content = document.createElement('li')
            content.classList.add('video')

            // creates a span to hold all the details of the video
            const text = document.createElement('span')
            text.classList.add('text')

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

            videoContainer.append(content)
        }

    });

    cancelButton.addEventListener('click', onDeleteCancel)
    deleteButton.addEventListener('click', onDeleteVideo)

    buttonDiv.append(deleteButton)
    buttonDiv.append(cancelButton)

    domDelete.append(h1)
    domDelete.append(logo)
    domDelete.append(pageTitle)
    domDelete.append(videoContainer)
    domDelete.append(buttonDiv)

    return domDelete
}

export default deletePage
