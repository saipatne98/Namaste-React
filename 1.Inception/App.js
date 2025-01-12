
// <div>
//     <span>
//         <ul>sai</ul>
//         <section>Patne</section>
//     </span>
// </div>



const heading = React.createElement(
    'div',
    {},
    React.createElement(
        "span",
        {},
        [  
            React.createElement("ul",{},"sai"),
            React.createElement("section",{},"Patne")
        ]
)
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

