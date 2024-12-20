import Chai from "./chai"

//fucntion name should always start with Capital letter
function App() {
  const username = "chai aur code" ;

  //we can return only one elemnt so bind the whole elment inside  <></>
  return (
    <>
    <Chai/>
              {/* if we want to use the variable we will write it inside {} */}
    <h1> chai aur react {username}</h1>
    </>
  )
}

export default App
