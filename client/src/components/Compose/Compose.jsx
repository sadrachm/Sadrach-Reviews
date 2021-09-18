import { useState } from "react";

function Compose() {
    const [inputs, setInputs] = useState({
        title:"",
        content:"",
        imgURL:"https://i.ibb.co/N9NVyWG/2551234.jpg",
        type:"",
        rating:""

    });

    function Send() {
        // if (inputs.imgURL === "") {
        //     setInputs(prev => {
        //         return {
        //           ...prev,
        //           ["imgURL"]: "https://i.ibb.co/N9NVyWG/2551234.jpg"
        //         };
        //       });
        // }
        fetch("/api/compose", {  
            method: "POST", 
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-type": "application/json"},  
            body: JSON.stringify(inputs)
        })         
        .then(response => {
            console.log(response.status)
        })  
        .catch(err => console.log(err));
    }

    function handleChange(event) {
        const {name, value} = event.target;
        console.log(value);
        setInputs(prev => {
            return {
              ...prev,
              [name]: value
            };
          });
          
    };
    return <> <h1 className="title">New Review</h1>
        <form>
            <div className="review" style={{marginTop:"50px", textAlign:"center"}}>
                <div class="form-check form-check-inline">
                    <input  onChange={handleChange} class="form-check-input" type="radio" name="type" id="game" value="game" required ></input>
                    <label class="form-check-label" for="game">
                        Game
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input onChange={handleChange} class="form-check-input" type="radio" name="type" id="anime" value="anime"></input>
                    <label class="form-check-label" for="anime">
                        Anime
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input onChange={handleChange} class="form-check-input" type="radio" name="type" id="movie" value="movie"></input>
                    <label class="form-check-label" for="movie">
                        Movie
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input onChange={handleChange} class="form-check-input" type="radio" name="type" id="book" value="book"></input>
                    <label class="form-check-label" for="book">
                        Book
                    </label>
                </div>
            <br></br> 
            <input className="inputs" onChange={handleChange} type="text" name="title" value={inputs.title} placeholder="Title" required></input>
            <br></br><textarea className="inputs" onChange={handleChange} rows="3" type="text" name="content" value={inputs.content} placeholder="Content" required></textarea>
            <br></br><textarea className="inputs" onChange={handleChange} rows="3" type="text" name="imgURL" value={inputs.imgURL} placeholder="Image URL"></textarea>
            <br></br><textarea className="inputs" onChange={handleChange} rows="1" type="number" min= "0" max = "10" name="rating" value={inputs.rating} placeholder="Rating" required></textarea>
            <br></br>
            <button className="composeButton" onClick={Send}>Send</button>
            </div>
        </form>
    </>
}

export default Compose;

    // const handleSubmit = (event) => {
    //     console.log("Submitted");
    //     event.preventDefault();
    //     const post = { id, imgURL, title, type, content };
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(post)
    //     };
    //     fetch('http://localhost:3001/api/', requestOptions)
    //     .then(() => {console.log("new post made");})
    //     // .then(response => response.json())
    //     // .then(data => setPostId(data.id));
    // };
    // useEffect(() => {
        // POST request using fetch inside useEffect React hook
        
    //     fetch('/api/compose', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setPostId(data.id));

    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);