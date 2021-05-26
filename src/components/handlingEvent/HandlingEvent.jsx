import React from "react";

class HandlingEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            location: "bn-BD",
        };
        // this.handleLocation=this.handleLocation.bind(this)
    }

    clock() {
        this.setState({ date: new Date() });
    }

    componentDidMount() {
        setInterval(() => {
            this.clock();
        }, 1000);
    }

    // =======================================================================
    //                  HERE WE NEED TO CHANGE THE CODE
    // =======================================================================

    handleLocation = () => {
        this.setState({ location: "en-US" });
    };

    // handleLocation() {
    //     this.setState({
    //         location: "en-US",
    //     });
    // }

    // =======================================================================
    //                             MODIFY END
    // =======================================================================

    render() {
        const { date, location } = this.state;
        return (
            <div>
                <h1>{date.toLocaleTimeString(location)}</h1>
                <button onClick={this.handleLocation}>
                    Click Here to change
                </button>
                {/* <button onClick={this.handleLocation.bind(this)}>
                    Click Here to change
                </button> */}
            </div>
        );
    }
}

export default HandlingEvent;
