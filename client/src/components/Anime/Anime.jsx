import React, { useState } from "react";

import { Route, Redirect, useParams } from "react-router-dom"; //eslint-disable-line
import Review from "../General/SingleReview.jsx"

function Anime() { 
    return <Review 
        type="anime"
    
    />
};

export default Anime

// const [data, setData] = useState(null);
// React.useEffect(() => {
//   fetch("/api")
//     .then((res) => res.json())
//     .then((data) => setData(data.message));
// }, []);


// <p>{!data ? "Loading..." : data}</p>