import * as React from "react";

export default class Title extends React.Component<{}> {
    public render() {
        return (
                <div>
                    {/* React components must have a wrapper node/element */}
                    <h1>Welcome!</h1>
                    <p>Find out temperature, conditions and more.. </p>

                </div>
        );
    }
};