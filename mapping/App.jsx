import React from 'react'
// import Nav from './components/Nav'
// import "./Global.css"
import Nav4 from './Nav4'
// import Grandparent from './propsdrilling/Grandparent'
// import "./propsdrilling/global.css"
// import states from './states/states'


function App() {
  return (
    <div>
      {/* <Grandparent data="Rajini"/> */}
        <Nav4 data={{course:["java","sql","webtech","reactjs","html"]}}/>
    </div>
  )
}

export default App