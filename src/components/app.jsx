import React from "react";
import ComponetDidMountLifeCycle from "./componentDidMOunt/ComponetDidMount";
import Form from "./formHandling/form";

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
        </>
    );
};
export default App;
