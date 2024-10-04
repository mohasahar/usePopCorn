import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// function Test() {
//   const [movieRating, setMovieRrating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRrating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Excelent"]}
    />
    <StarRating size={24} color={"red"} className="test" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
