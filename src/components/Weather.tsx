import * as React from "react";

export default class Weather extends React.Component<any, any> {
    constructor(props:any){
        super(props);
    }
    public render() {
        return (
                <div>
                    <div className="description">
                        { this.props.description &&  <p className="wHead"> <span className="wBody">{this.props.description}</span> </p> }
                    </div>

                    { this.props.humidity && this.props.pressure && <p className="wHead"> Humidity: <span className="wBody">{this.props.humidity}% </span> &nbsp;&nbsp;&nbsp;&nbsp;  Pressure:  <span className="wBody">{this.props.pressure} hPa</span> </p> }        
                    { this.props.temperature && this.props.visibility && <p className="wHead"> Temperature: <span className="wBody">{this.props.temperature}°C</span> &nbsp;&nbsp;&nbsp;&nbsp; Visibility:  <span className="wBody">{this.props.visibility} km</span> </p> }
                    { this.props.error && <p className="wError"> {this.props.error} </p> }
                </div>
        );
    }
};