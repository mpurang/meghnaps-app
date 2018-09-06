import * as React from "react";

export default class Title extends React.Component<{}> {
    public render() {
        return (
                <div>
                    {/* React components must have a wrapper node/element */}
                    <h2 className="titleText">Current weather forecast ...</h2>

                </div>
        );
    }
};