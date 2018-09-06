import * as React from 'react';
import Title from "./components/Title";
import Weather from "./components/Weather";

// API key
const apiKey = "5744e229152711c749843d3bcb405c7e";

interface IState{
  description: any,
  error: any,
  humidity: any,
  pressure: any,
  temperature: any,
  visibility: any
}


export default class App extends React.Component<any, any, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      description: "",
      error: "",
      humidity: "",
      pressure: "",
      temperature: "",
      visibility: ""
    }
  }
  public getWeather = async (e:any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // make an API call
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);

    // convert it to json format
    const apiData = await apiCall.json();
    // console.log(apiData);

  if (city && country) {
      this.setState({
        description: apiData.weather[0].description,
        error: "",
        humidity: apiData.main.humidity,
        pressure: apiData.main.pressure,
        temperature: apiData.main.temp,
        visibility: apiData.visibility
      });
    } else {
        this.setState({
          description: undefined,
          error: "Please enter the location",
          humidity: undefined,
          pressure: undefined,
          temperature: undefined,
          visibility: undefined
      });
    }

  }


  public render() {
    return (
      <div>
        <div className="outerC">
          <div className="innerC">
          <div className="titleC">
            <Title />
          </div>
            {/* 'this' refers to the App */}
            <div className="formC">
            <form onSubmit = {this.getWeather} >
                  <input type="text" name = "city" placeholder = "City name"/>
                  <input type="text" name = "country" placeholder = "Country name"/>
                  <button>Search >></button>
            </form>
            </div>

            <div className="weatherC">
            <Weather
                  description = {this.state.description}
                  error = {this.state.error}
                  humidity = {this.state.humidity}
                  pressure = {this.state.pressure}
                  temperature = {this.state.temperature}
                  visibility = {this.state.visibility}
                  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <input type="submit" value="Search" />
