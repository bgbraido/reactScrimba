ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
ReactDOM.render(<h1>Hi stranger!!</h1>, document.getElementById("welcomeName"))
ReactDOM.render(<ul><li>Item 1</li><li>Item 2</li></ul>,
    document.getElementById("lineItem")

)

function MainContent(){
    return <h1>I'm learning React!</h1>
}
ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("mainContent")
)

//Imperative way
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("imperative").append(h1)

// JSX
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render(page, document.getElementById("jsxPage"))

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav>
        <h1>website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(navbar, document.getElementById("navbar"))