//In this funciton we are injecting the reactElemet inside the root
function customRender(reactElement, container){
   /* 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)//injecting inside the container
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    //if there are multiple attributes, using loop it will be easy to setAttribute 
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// this is the behind the seen of <a> tag. this is our implementaion of <a> tag
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

//taking the refrence of the <div> tag whose id is 'root' which is present inside the index.html file 
const mainContainer = document.querySelector('#root');

        //what to inject , // where to inject
customRender(reactElement, mainContainer);