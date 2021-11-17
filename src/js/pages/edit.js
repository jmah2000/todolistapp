import { simpleButton } from "../components/ui/button.js";
import Router from "../router/routers.js";
import { getStore } from "../redux/store.js";
import bookmarkIcon from '../components/icons/bookmark-icon.js'
import elementCreator from '../components/ui/elementCreator.js'
import reducer from "../redux/reducer.js";
import {createFullForm} from "../utils/formCreate.js";

const cancelButton = simpleButton("cancel", "crud-button")
const editButton = simpleButton("edit", "crud-button")


const editPage = function (passedVideoId)
{
    const datas = getStore();
    const selectedVideoIndex = datas.findIndex(i => i.id == passedVideoId.id)

    let selectedVideo = {}


    datas.forEach(video => {

        if(video.id == passedVideoId.id)
        {
            selectedVideo = video
        }
    })
    
    const domEdit = document.createElement('header')
    domEdit.classList.add('ui-page-header')
    const buttonDiv = document.createElement('span')
    buttonDiv.classList.add('ui-page-button')

    const h1 = elementCreator('h1', `YouTracker ${bookmarkIcon}`, 'logo')
    const logo = elementCreator('blockquote', 'A Youtube video tracker (basically a bookmarker)', 'logo')
    const pageTitle = elementCreator('blockquote', 'Adding a video', 'logo')


    // ADD PAGE HANDLERS
    function onAddCancel(e){
        Router('/')
    }

    function onEditVideo(e){

        const editTitle = document.getElementById('titlevid').value
        const editChannel = document.getElementById('channelname').value
        const editCategory = document.getElementById('categoryvid').value
        const editDateRelease = document.getElementById('datereleased').value
        const editDateAdded = document.getElementById('dateadded').value
        const editLength = document.getElementById('videolength').value
        const editLink = document.getElementById('link').value
        const editIsComplete = document.getElementById('iscomplete').checked

        // https://www.youtube.com/watch?v=Hw0BfmTVnCs
        // Since each video has a unique id, I am using that as the id for the video. The unique id part starts after the "?v=" which is 32 chars into the link
        const editId = editLink.substr(32)

        const editThumbnail = `http://img.youtube.com/vi/${editId}/2.jpg`

        const tempObj = {
            id: editId,
            link: editLink,
            channel: editChannel,
            category: editCategory,
            title: editTitle,
            isComplete: editIsComplete,
            dateReleased: editDateRelease,
            dateAdded: editDateAdded,
            videoLength: editLength,
            thumbNail: editThumbnail
        }

        const actions = {
            type:"edit",
            payload:{selectedVideoIndex, tempObj},
            cb:()=> Router('/')
        }

        reducer(actions)

    }

    // FORM CREATION
    const form = createFullForm(selectedVideo.title, selectedVideo.channel, selectedVideo.category, selectedVideo.dateReleased, selectedVideo.dateAdded, selectedVideo.videoLength, selectedVideo.link, selectedVideo.isComplete)

    buttonDiv.append(editButton)
    buttonDiv.append(cancelButton)

    cancelButton.addEventListener('click', onAddCancel)
    editButton.addEventListener('click', onEditVideo)

    domEdit.append(h1)
    domEdit.append(logo)
    domEdit.append(pageTitle)
    domEdit.append(form)
    domEdit.append(buttonDiv)

    return domEdit
}

export default editPage
