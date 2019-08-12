import React from "react"
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = `0439b3d5de6bee4961a3e1454084792f`

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=gwangju,southkorea&appid=${API_KEY}&units=metric`);
    const data = await api_call.json()
  }
  render() {
    return (
      <div>  
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App