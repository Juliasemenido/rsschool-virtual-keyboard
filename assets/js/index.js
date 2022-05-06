let createAndAppend = function({className, parentElement, value}, tag = 'div') {
    let element = document.createElement(tag);
    element.className = className;
    if (value) {
       element.innerHTML = value;
    }
    parentElement.appendChild(element);

    return element;
};

let keyboard = new keyboard(document,body);