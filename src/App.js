import React, { useEffect } from "react";
import "./App.css";

import Background from "./background";

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <Background />;
};

export default App;
