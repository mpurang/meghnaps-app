import * as React from 'react';
import './App.css';
// import Form from "./components/Form";
import Title from "./components/Title";
import Weather from "./components/Weather";

// API key
const apiKey = "5744e229152711c749843d3bcb405c7e";

interface IState{
  city: any,
  country: any,
  description: any,
  error: any,
  humidity: any,
  pressure: any,
  sunrise: any,
  sunset: any,
  temp_max: any,
  temp_min:any,
  temperature: any,
  visibility: any
}


export default class App extends React.Component<any, any, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      city: "",
      country: "",
      description: "",
      error: "",
      humidity: "",
      pressure: "",
      sunrise: "",
      sunset: "",
      temp_max: "",
      temp_min: "",
      temperature: "",
      visibility: ""
    }
  }
  public getWeather = async (e:any) => {
    // tslint:disable-next-line:no-console
    console.log("test");
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // make an API call
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);

    // convert it to json format
    const apiData = await apiCall.json();
    // tslint:disable-next-line:no-console
    console.log(apiData);

  if (city && country) {
      this.setState({
        city: apiData.name,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        error: "",
        humidity: apiData.main.humidity,
        pressure: apiData.main.pressure,
        sunrise: apiData.sys.sunrise,
        sunset: apiData.sys.sunset,
        temp_max: apiData.main.temp_max,
        temp_min: apiData.main.temp_min,
        temperature: apiData.main.temp,
        visibility: apiData.visibility
      });
    } else {
        this.setState({
          city: undefined,
          country: undefined,
          description: undefined,
          error: "Please enter the location.",
          humidity: undefined,
          pressure: undefined,
          sunrise: undefined,
          sunset: undefined,
          temp_max: undefined,
          temp_min: undefined,
          temperature: undefined,
          visibility: undefined
      });
    }

  }


  public render() {
    return (
      <div className="container-fluid">
        {/* 'this' refers to the App and getWeather is props */}
        <Title />
        <form onSubmit = {this.getWeather} >
                
                <input type="text" name = "city" placeholder = "City name"/>
                <input type="text" name = "country" placeholder = "Country name"/>
                <input type="submit" value="Search" />

            </form>
        <Weather 
            city={this.state.city}
            country = {this.state.country}
            description = {this.state.description}
            error = {this.state.error}
            humidity = {this.state.humidity}
            pressure = {this.state.pressure}
            sunrise = {this.state.sunrise}
            sunset = {this.state.sunset}
            temp_max = {this.state.temp_max}
            temp_min = {this.state.temp_min}
            temperature = {this.state.temperature}
            visibility = {this.state.visibility}
            />
      </div>
    );
  }
}
