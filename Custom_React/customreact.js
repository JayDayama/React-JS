function customRender(reactElement,Container){
    /*
    const Domelement = document.createElement(reactElement.type)
    Domelement.innerHTML = reactElement.children
    Domelement.setAttribute('href', reactElement.props.href)
    Domelement.setAttribute('target', reactElement.props.target)

    // abb uss container mei add bhi toh karna hai
    Container.appendChild(Domelement)
    */

    const Domelement = document.createElement(reactElement.type)
    Domelement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        Domelement.setAttribute(prop,reactElement.props[prop])
    }
    Container.appendChild(Domelement)
}

// function mei jo html return kiya hai react ko woh kaisa dikhta hai
// yeh aise toh inbuilt hota hai react ki library mei lekin yeh humari custom library hai toh hume harr element ke liye harr baar aise naya create karna padega tag use karne ke liye

const react_element = {
    type : 'a',
    props : {
        href : 'https://www.google.com/',
        target : '_blank'
        // linked webpage in new tab
    },
    children : 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

// injecting html in whatever part thru a function:

customRender(react_element,mainContainer)