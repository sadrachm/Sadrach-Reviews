import React, { useState } from "react";
import { Route, Redirect, useParams } from "react-router-dom"; //eslint-disable-line
import Review from "../General/SingleReview.jsx"

function Movie() { 
    return <Review 
        type="movie"    
    />
};

export default Movie