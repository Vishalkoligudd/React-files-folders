import React from 'react'

function Hooks1() {
    let [IMG,setIMG]=React.useState('https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw')
  return (
    <div>
        <img src={IMG} alt="" height='100px' />
        <button onClick={()=>{
            setIMG('https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png')
        }}>click</button>
       
    </div>
  )
}

export default Hooks1