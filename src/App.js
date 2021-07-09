import React from "react";
import CompareMachinesView from "./views/CompareMachinesView";
import { colors } from "./constants/colors";
import "./app.css";

function App() {
    const style = {
        backgroundColor: colors.GRAY,
    };
    return (
        <div className="App" style={style}>
            <CompareMachinesView />
        </div>
    );
}

export default App;
