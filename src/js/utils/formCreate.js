import makeElement from "./makeElement.js"

const createForm = function (){
    const template = `
    <div class="form">
        <label for="titlevid">
            Title:
            <input type="text" id="titlevid" name="titlevid" required>
        </label>
        <label for="channelname">
            Channel Name:
            <input type="text" id="channelname" name="channelname" required>
        </label>
        <label for="categoryvid">
            Category:
            <input type="text" id="categoryvid" name="categoryvid" required>
        </label>
        <label for="datereleased">
            Video Release Date:
            <input type="date" id="datereleased" name="datereleased" required>
        </label>
        <label for="dateadded">
            Date Added:
            <input type="date" id="dateadded" name="dateadded" required>
        </label>
        <label for="videolength">
            Video Length:
            <input type="text" id="videolength" name="videolength" placeholder="HH:MM:SS" required>
        </label>
        <label for="link">
            Link to video:
            <input type="text" id="link" name="link" placeholder="https://www.youtube.com/watch?v=p7rJNPBExAc" required>
        </label>
        <label for="iscomplete">
            Watched Video:
            <input class="checkbox" type="checkbox" id="iscomplete" name="iscomplete">
        </label>
    </div>`
    const element = makeElement(template)
    return element
}

const createFullForm = function(title, channel, category, dateRelease, dateAdded, length, link, isComplete){

    let template = ``

    // the difference is literally if the checkbox is actually checked or not
    // if it has been completed/watched, the checkbox is checked, if not, there is no check on the box
    if (isComplete == true)
    {
        template = `
        <div class="form">
            <label for="titlevid">
                Title:
                <input type="text" id="titlevid" name="titlevid" value="${title}" required>
            </label>
            <label for="channelname">
                Channel Name:
                <input type="text" id="channelname" name="channelname" value="${channel}" required>
            </label>
            <label for="categoryvid">
                Category:
                <input type="text" id="categoryvid" name="categoryvid" value="${category}" required>
            </label>
            <label for="datereleased">
                Video Release Date:
                <input type="date" id="datereleased" name="datereleased" value="${dateRelease}" required>
            </label>
            <label for="dateadded">
                Date Added:
                <input type="date" id="dateadded" name="dateadded" value="${dateAdded}" required>
            </label>
            <label for="videolength">
                Video Length:
                <input type="text" id="videolength" name="videolength" placeholder="HH:MM:SS" value="${length}" required>
            </label>
            <label for="link">
                Link to video:
                <input type="text" id="link" name="link" placeholder="https://www.youtube.com/watch?v=p7rJNPBExAc" value="${link}" required>
            </label>
            <label for="iscomplete">
                Watched Video:
                <input class="checkbox" type="checkbox" id="iscomplete" name="iscomplete" checked>
            </label>
        </div>`
    }
    else
    {
        template = `
        <div class="form">
            <label for="titlevid">
                Title:
                <input type="text" id="titlevid" name="titlevid" value="${title}" required>
            </label>
            <label for="channelname">
                Channel Name:
                <input type="text" id="channelname" name="channelname" value="${channel}" required>
            </label>
            <label for="categoryvid">
                Category:
                <input type="text" id="categoryvid" name="categoryvid" value="${category}" required>
            </label>
            <label for="datereleased">
                Video Release Date:
                <input type="date" id="datereleased" name="datereleased" value="${dateRelease}" required>
            </label>
            <label for="dateadded">
                Date Added:
                <input type="date" id="dateadded" name="dateadded" value="${dateAdded}" required>
            </label>
            <label for="videolength">
                Video Length:
                <input type="text" id="videolength" name="videolength" placeholder="HH:MM:SS" value="${length}" required>
            </label>
            <label for="link">
                Link to video:
                <input type="text" id="link" name="link" placeholder="https://www.youtube.com/watch?v=p7rJNPBExAc" value="${link}" required>
            </label>
            <label for="iscomplete">
                Watched Video:
                <input class="checkbox" type="checkbox" id="iscomplete" name="iscomplete">
            </label>
        </div>`
    }


    const element = makeElement(template)
    return element
}


export  {createForm, createFullForm}