import makeElement from "./makeElement.js"

const makeImg = function (imgPath="", imgTitle="Title"){
     const template = `<img src="${imgPath}" alt="${imgTitle}">`
     const element = makeElement(template)
     return element
}

export default makeImg