import React, { useState } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { Route, Redirect, useParams } from "react-router-dom"; //eslint-disable-line

function Review(prop) { 
    const [toggle, setToggle] = useState(false);
    const [changes, setChanges] = useState({
        content: [],
        title: "",
        imgURL: "",
        rating: prop.rating
    });
    const { id } = useParams()
    const [item, setItem] = useState([]);
    const [style, setStyle] = useState({});
    const [proc, setProc] = useState("Loading...")

    function edit(event) {
        let dict = {};
        for (let change in changes) {
            if (changes[change].length != "" && changes[change] != 0) {
                dict[change] = changes[change];
            }
        }
        fetch("/api/"+prop.type+"/"+id, {  
            method: "PATCH", 
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-type": "application/json"},  
            body: JSON.stringify(dict)
        })         
        .then(response => {
            console.log(response.status)
            if (response.status == 200) {
                setToggle(false);
            } 

        })  
        // // .then(res => res.text())
        // .then(data => console.log(data))
        .catch(err => console.log(err));
    };

    function toggleEdit() {
        toggle ? setStyle() : setStyle({backgroundColor: "#246dff"});
        setToggle(!toggle);
    };

    function handleChange(event) {
        const {name, value} = event.target;
        setChanges(prev => {
            return {
              ...prev,
              [name]: value
            };
          });
    };

    function reset(event) {
        event.preventDefault()
        setChanges({
            content: "",
            title: "",
            imgURL: ""
        });
    };
    
    function erase(event) {
        fetch("/api/"+prop.type+"/"+id, {  
            method: "DELETE", 
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-type": "application/json"},  
            body: JSON.stringify({x:"x"})
        })         
        .then(response => {
            window.location.href = "https://sadrachreviews.herokuapp.com/"+prop.type+"s";
        })  
        .catch(err => console.log(err));
    };

    React.useEffect(() => {
        const fetchAPI = () => {
            fetch("/api/"+prop.type+"/" + id)
                .then((res) => res.json())
                .then((data) => {setItem(data);})
                .catch(err => {console.log(err)})
            };
        fetchAPI();
     }, []); // eslint-disable-line react-hooks/exhaustive-deps
    if (typeof(item[0])!=='undefined') {
        return <>
            <a href={"/"+prop.type+"s"}><ArrowBackIosIcon className="back"/></a><div style = {{textAlign:"center"}}>
            <h1 className="title">{item[0].title}</h1>
            <img alt = {item[0].title} className="mb-5 " src = {item[0].imgURL}></img>
            <h2 className = "singleReview">Rating: {item[0].rating}</h2>
            <h2 className = "singleReview">{item[0].content}</h2>
            <button className="composeButton mt-0 " onClick={toggleEdit} style = {style}>Edit</button>
            {toggle && <form>
                <input className="inputs" autocomplete="off" onChange={handleChange} type="text" name="title" value={changes.title} placeholder="Title"></input>
                <input className="inputs" autocomplete="off" onChange={handleChange} type="text" name="rating" value={changes.rating} placeholder="Rating"></input>
                <br></br><textarea className="inputs" onChange={handleChange} rows="3" type="text" name="content" value={changes.content} placeholder="Content"></textarea>
                <br></br><textarea className="inputs" onChange={handleChange} rows="3" type="text" name="imgURL" value={changes.imgURL} placeholder="Image URL"></textarea>
                <br></br>
                <button className="composeButton space" onClick={edit}>Send</button>
                <button className="composeButton space" onClick={reset}>Reset</button> 
                <button className="composeButton danger space" onClick={erase}>Delete</button> 
            </form>}

        </div></>
    } else {
        setTimeout(function(){
            setProc("Review is No Longer Available");
        }, 2 * 1000); // time in milliseconds

        return <h1 className="title" style={{fontSize:"3rem"}}>{proc}</h1>
    }
    
};

export default Review;

// const [data, setData] = useState(null);
// React.useEffect(() => {
//   fetch("/api")
//     .then((res) => res.json())
//     .then((data) => setData(data.message));
// }, []);


// <p>{!data ? "Loading..." : data}</p>