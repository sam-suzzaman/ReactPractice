import React from "react";
import ComponetDidMountLifeCycle from "./componentDidMOunt/ComponetDidMount";
import Form from "./formHandling/form";
import HandlingEvent from "./handlingEvent/HandlingEvent";

const App = () => {
    return (
        <>
            <div>
                <h2>Hello React----- </h2>
                <Form />
            </div>
            <div>
                <ComponetDidMountLifeCycle />
            </div>
            <div>
                <HandlingEvent />
            </div>
        </>
    );
};
export default App;
