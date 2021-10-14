import Router from "../../router/routers.js"
import makeElement from "../../utils/makeElement.js"

const onRequestPage = function(e){
    //e.preventDefault();
    Router(e.currentTarget.dataset.path);
    return false;
}

const anchor = function (label="ui link", link="f", className="ui-link")
{
    const template = `<a href="${link}" class="${className}" target="_blank">${label}</a>`
    const element = makeElement(template)
    element.addEventListener('click', onRequestPage)
    return element
}

export default anchor