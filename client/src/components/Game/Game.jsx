import React, { useState } from "react";
import { Route, Redirect, useParams } from "react-router-dom"; //eslint-disable-line
import Review from "../General/SingleReview.jsx"

function Game() { 
    return <Review 
        type="game"    
    />
};

export default Game