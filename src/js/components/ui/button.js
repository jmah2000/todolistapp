import makeElement from "../../utils/makeElement.js";

const button = function (label="ui button", className="ui-button", buttonType=null, dataId=null){
     const template = `<button class="${className}" id="${buttonType}" data-key="${dataId}">${label}</button>`
     const element = makeElement(template);

     return element
}

const simpleButton = function (label="ui button", className="ui-button"){
     const template = `<button class="${className}">${label}</button>`
     const element = makeElement(template);

     return element
}

export {button, simpleButton}


 