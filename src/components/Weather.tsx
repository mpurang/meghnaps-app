import * as React from "react";

export default class Weather extends React.Component<any, any> {
    constructor(props:any){
        super(props);
    }
    public render() {
        return (
                <div>
                    City: {this.props.city}, Country: {this.props.country}
                    Description: {this.props.description},
                    {this.props.error}
                    Humidity: {this.props.humidity}, Pressure: {this.props.pressure}
                    Sunrise: {this.props.sunrise}, Sunset: {this.props.sunset}
                    High: {this.props.temp_max}, Low: {this.props.temp_min}
                    Temperature: {this.props.temperature}, Visibility: {this.props.visibility}
                </div>
        );
    }
};