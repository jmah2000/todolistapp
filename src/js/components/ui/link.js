import Router from "../../router/routers.js"
import makeElement from "../../utils/makeElement.js"

const onRequestPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path);
    return false;
}

const link = function (label="ui link", path="f", className="ui-link")
{
    const template = `<a href="${path}" class="${className}" data-path="${path}" target="_blank">${label}</a>`
    const element = makeElement(template)
    element.addEventListener('click', onRequestPage)
    return element
}

export default link