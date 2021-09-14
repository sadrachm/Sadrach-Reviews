//jshint esversion:6

const PORT = process.env.PORT || 3001;
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const _ = require("lodash");
const path = require('path');
const app = express();

app.use(bodyParser.json({
  extended: true
}));

mongoose.connect("mongodb+srv://Sadrach-admin:Sadrach2@cluster0.bt2xz.mongodb.net/ReviewsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const itemsSchema = {
  id: Number,
  imgURL: String,
  title: String,
  type: String,
  content: String,
  rating: Number
};

const Item = mongoose.model("Item", itemsSchema);


app.use(express.static(path.resolve(__dirname, '../client/build')));

// General API post and get

app.route("/api")
.get((req, res) => {
  Item.find({}, (err, foundItems) => {
      res.json(foundItems);
  });
})
.post((req, res) => {
  let id = req.body.id;
  let title = req.body.title;
  console.log(title);
  let type = req.body.type;
  let content = req.body.content;
  let imgURL = req.body.imgURL;
  let rating = req.body.rating;
  const item = new Item({
      id: id,
      title: title,
      type:type,
      content: content,
      imgURL: imgURL,
      rating: rating
  });
  item.save();
  res.send("/")
});

// Anime Reviews 

app.get("/api/anime", (req, res) => {
  Item.find({type:"anime"}, (err, foundItems) => {
      res.json(foundItems);
  });
});

app.route("/api/anime/:id").get((req, res) => {
  const id = req.params.id;
  Item.find({id:id, type:"anime"}, (err, foundItems) => {
      res.json(foundItems);
  });
})
.patch((req, res) => {
  const id = req.params.id;
  Item.findOne({type:"anime", id:id}, (err, found) => {
    console.log(req.body);
    if (found.length===0) {
      return res.status(404).send('The product with the given ID was not found.');
    } else {      
      let query = {$set: {}};
      for (let key in req.body) {
        // if (found[key] && found[key] !== req.body[key]){ // if the field we have in req.body exists, we're gonna update it          
        if (key === "rating" && req.body[key] < 11) {
          query.$set[key] = req.body[key];
        } else if (key=== "rating") {
          query.$set[key] = found[key];
        } else {          
          query.$set[key] = req.body[key];
        }
        // }
      }  
      console.log(query);
      Item.updateOne({type:"anime", id:id}, query, (err, docs) => {
         //err ? console.log(err) : console.log("Succsfully updated : ", docs);
      res.send({success: true});
      });
    }
  });
})
.delete((req, res) => {
  const id = req.params.id;
  Item.deleteOne({type:"anime", id:id}, function (err) {
    if (err) console.log(err);
    else console.log("Successfully deleted");
  });
  res.send({success: true});
});

// Game Reviews 

app.get("/api/game", (req, res) => {
  Item.find({type:"game"}, (err, foundItems) => {
      res.json(foundItems);
  });
});
app.route("/api/game/:id").get((req, res) => {
  const id = req.params.id;
  Item.find({id:id, type:"game"}, (err, foundItems) => {
      res.json(foundItems);
  });
})
.patch((req, res) => {
  const id = req.params.id;
  Item.findOne({type:"game", id:id}, (err, found) => {
    console.log(req.body);
    if (found.length===0) {
      return res.status(404).send('The product with the given ID was not found.');
    } else {      
      let query = {$set: {}};
      for (let key in req.body) {
        if (key === "rating" && req.body[key] < 11) {
          query.$set[key] = req.body[key];
        } else if (key=== "rating") {
          query.$set[key] = found[key];
        } else {          
          query.$set[key] = req.body[key];
        }
      }  
      console.log(query);
      Item.updateOne({type:"game", id:id}, query, (err, docs) => {
        // err ? console.log(err) : console.log("Succsfully updated : ", docs);
      res.send({success: true});
      });
    }
  });
})
.delete((req, res) => {
  console.log("IM IN")
  const id = req.params.id;
  Item.deleteOne({type:"game", id:id}, function (err) {
    if (err) console.log(err);
    else console.log("Successfully deleted");
  });
  res.send({success: true});
});

// Movie Reviews 

app.get("/api/movie", (req, res) => {
  Item.find({type:"movie"}, (err, foundItems) => {
      res.json(foundItems);
  });
});
app.route("/api/movie/:id").get((req, res) => {
  const id = req.params.id;
  Item.find({id:id, type:"movie"}, (err, foundItems) => {
      res.json(foundItems);
  });
})
.patch((req, res) => {
  const id = req.params.id;
  Item.findOne({type:"movie", id:id}, (err, found) => {
    console.log(req.body);
    if (found.length===0) {
      return res.status(404).send('The product with the given ID was not found.');
    } else {      
      let query = {$set: {}};
      for (let key in req.body) {
        if (key === "rating" && req.body[key] < 11) {
          query.$set[key] = req.body[key];
        } else if (key=== "rating") {
          query.$set[key] = found[key];
        } else {          
          query.$set[key] = req.body[key];
        }
      }  
      console.log(query);
      Item.updateOne({type:"movie", id:id}, query, (err, docs) => {
        // err ? console.log(err) : console.log("Succsfully updated : ", docs);
      res.send({success: true});
      });
    }
  });
})
.delete((req, res) => {
  console.log("IM IN")
  const id = req.params.id;
  Item.deleteOne({type:"movie", id:id}, function (err) {
    if (err) console.log(err);
    else console.log("Successfully deleted");
  });
  res.send({success: true});
});

// Create New Review

app.route("/api/compose")
.get((req, res) => {
  res.sendFile("form.html", {root: __dirname });
})
.post((req, res) => {
  console.log(req.body.title);
  let title = req.body.title;
  let type = req.body.type;
  let content = req.body.content;
  let imgURL = req.body.imgURL;  
  console.log(type, content, imgURL, title);
  Item.find({type:type}).sort('id').exec(function(err, found) {
    let id;
    if (found.length > 0) {
      id = found[found.length-1].id+1;
    } else {   
      id = 1;
    }
    const item = new Item({
      id: id,
      title: title,
      type:type,
      content: content,
      imgURL: imgURL
    });      
    console.log(item);  
    item.save();
    // res.redirect("/success")  
    res.send({success:"hello"});    
  });  
});

// app.get("/api", (req, res) => {
//     Item.find({}, (err, foundItems) => {
//         res.json(foundItems);
//     });
//   });

app.get("/api/:id", (req, res) => {
  const id = req.params.id;
  Item.find({id:id}, (err, foundItems) => {
      res.json(foundItems);
  });
});


// app.post("/api", (req, res) => {
//   console.log("dsajfhgsdkfj");
// //     let id = req.body.id;
// //     let title = req.body.title;
// //     console.log(title);
// //     let type = req.body.type;
// //     let content = req.body.content;
// //     let imgURL = req.body.imgURL;
// //     const item = new Item({
// //         id: id,
// //         title: title,
// //         type:type,
// //         content: content,
// //         imgURL: imgURL
// //     });
// //     item.save();
// //     res.send("/")
// });
// app.get("/api/compose", (req, res) => {
//     res.sendFile("form.html", {root: __dirname });

// });
// app.post("/api/compose", (req, res) => {
//     Item.find({}).sort('id').exec(function(err, found) {
//         let id = found[found.length-1].id+1;
//         let title = req.body.title;
//         let type = req.body.type;
//         let content = req.body.content;
//         let imgURL = req.body.imgURL;
//         const item = new Item({
//             id: id,
//             title: title,
//             type:type,
//             content: content,
//             imgURL: imgURL
//         });
//         item.save();
//         res.send("/")
//     });

    
// });

//All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});