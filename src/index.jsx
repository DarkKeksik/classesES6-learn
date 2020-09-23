import React from "react";
import { render } from "react-dom";
import { ClassesES5, ClassesES6 } from "./components";
import "./styles/styles.less";

const App = () => {
    return (
        <section className="wrap">
            <h1>Learning classes in JavaScript</h1>
            <div className="gridGap_1 gridColumns_2">
                <ClassesES5 />
                <ClassesES6 />
            </div>
        </section>
    )
}

render(<App />, document.getElementById("reactWrap"));