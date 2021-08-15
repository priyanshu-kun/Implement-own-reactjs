import { render } from "./MyReact.js"
import Component from "./Components.js"

let propCount = 0;

document.getElementById("btn-props").addEventListener("click",() => {
    propCount++;
    renderComponent()
})

function renderComponent() {
    render(Component,{propCount},document.getElementById("root"))
    render(Component,{propCount,btnEle: document.getElementById("btn-count-2")},document.getElementById("root-1"))
}

renderComponent()