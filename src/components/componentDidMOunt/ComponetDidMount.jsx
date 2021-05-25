import React from "react";
// import React, { useState, useEffect } from "react";

// ========================= Class Component ================================

class ComponetDidMountLifeCycle extends React.Component {
    state = {
        date: new Date(),
    };

    componentDidMount() {
        setInterval(() => this.clock(), 1000);
        // console.log("component working");
    }

    clock() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString("bn-BD")}</h1>
            </div>
        );
    }
}

// ========================= Functional Component ================================

// const ComponetDidMountLifeCycle = () => {
//     let [date, setDate] = useState(new Date().toLocaleTimeString("bn-BD"));
//     useEffect(() => {
//         setInterval(clock, 1000);
//         console.log("hello Effect");
//     });

//     const clock = () => {
//         setDate(new Date().toLocaleTimeString("bn-BD"));
//     };

//     return <div>{date}</div>;
// };

export default ComponetDidMountLifeCycle;
