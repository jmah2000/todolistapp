import makeElement from "../../utils/makeElement.js"

const heading = function (elementType='h2', label="ui heading", className="ui-heading"){
     const template = `<${elementType} class="${className}" maxlength="35"> ${label} </ ${elementType}>`
     const element = makeElement(template)
     return element
}

export default heading