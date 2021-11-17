import { simpleButton } from "../components/ui/button.js";
import Router from "../router/routers.js";
import { getStore } from "../redux/store.js";
import bookmarkIcon from '../components/icons/bookmark-icon.js'
import elementCreator from '../components/ui/elementCreator.js'
import reducer from "../redux/reducer.js";
import {createForm} from "../utils/formCreate.js";

const cancelButton = simpleButton("cancel", "crud-button")
const addButton = simpleButton("add", "crud-button")


const addPage = function ()
{
    const domAdd = document.createElement('header')
    domAdd.classList.add('ui-page-header')
    const buttonDiv = document.createElement('span')
    buttonDiv.classList.add('ui-page-button')

    const h1 = elementCreator('h1', `YouTracker ${bookmarkIcon}`, 'logo')
    const logo = elementCreator('blockquote', 'A Youtube video tracker (basically a bookmarker)', 'logo')
    const pageTitle = elementCreator('blockquote', 'Adding a video', 'logo')


    // ADD PAGE HANDLERS
    function onAddCancel(e){
        Router('/')
    }

    function onAddVideo(e){

        const addTitle = document.getElementById('titlevid').value
        const addChannel = document.getElementById('channelname').value
        const addCategory = document.getElementById('categoryvid').value
        const addDateRelease = document.getElementById('datereleased').value
        const addDateAdded = document.getElementById('dateadded').value
        const addLength = document.getElementById('videolength').value
        const addLink = document.getElementById('link').value
        const addIsComplete = document.getElementById('iscomplete').checked

        // https://www.youtube.com/watch?v=Hw0BfmTVnCs
        // Since each video has a unique id, I am using that as the id for the video. The unique id part starts after the "?v=" which is 32 chars into the link
        const addId = addLink.substr(32)

        const addThumbnail = `http://img.youtube.com/vi/${addId}/2.jpg`

        const tempObj = {
            id: addId,
            link: addLink,
            channel: addChannel,
            category: addCategory,
            title: addTitle,
            isComplete: addIsComplete,
            dateReleased: addDateRelease,
            dateAdded: addDateAdded,
            videoLength: addLength,
            thumbNail: addThumbnail
        }

        const actions = {
            type:"add",
            payload:{tempObj},
            cb:()=> Router('/')
        }

        reducer(actions)

    }

    // FORM CREATION
    const form = createForm()

    buttonDiv.append(addButton)
    buttonDiv.append(cancelButton)

    cancelButton.addEventListener('click', onAddCancel)
    addButton.addEventListener('click', onAddVideo)

    domAdd.append(h1)
    domAdd.append(logo)
    domAdd.append(pageTitle)
    domAdd.append(form)
    domAdd.append(buttonDiv)

    return domAdd
}

export default addPage
