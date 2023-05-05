import React, { useEffect, useState } from 'react'
import './index.css'

function App() {
    const [data,setdata]=useState(null)
    const [weather,setweather]=useState(null)
    const [city,setcity]=useState("indore")
   
    useEffect(()=>{
        async function fetchd(){
            let fetchdata=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6f2943a8e0adfd2d6074c7e796e05e16`)
            let response=await fetchdata.json()
            console.log(response);
            setdata(response.main)
            setweather(response.weather)
            
        }
        fetchd()
    },[city])
  return (
    <>
    <div  className='div' style={{display:'flex', flexDirection:'column',border:'2px solid black',backgroundColor:'gainsboro'}}>
    <input type="text" placeholder='Enter the city name' onChange={(e)=>{setcity(e.target.value)}}/>
    {  !data?( <div>data not found</div> ):(
    <div style={{ marginLeft:'60px',marginTop:'20px',color:'blue'}}> 
    <div>Temp : {data.temp} celcius </div> 
    <div>Humidity : {data.humidity}</div> 
    <div>Weather : {weather[0].description}</div>
    </div>
    )
    }
     </div>
     </>
   
  )
}

export default App