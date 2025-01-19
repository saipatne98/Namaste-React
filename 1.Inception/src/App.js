import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// React.createElement => objet => HTMlelement render










const AppLayout = () => {
    return <div>
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<AppLayout />);
