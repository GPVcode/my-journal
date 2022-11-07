const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json()); // let's me acess the request.body

//ROUTES//
//create our RESTFUL API
//get all items
app.get("/items", async(req, res) => {
    try{
        const allItems = await pool.query("SELECT * FROM item")
        res.json(allItems.rows)
    } catch(err){
        console.error(err.message)
    }
})
//get a specific item
app.get("/items/:id", async(req, res) =>{
    try{
        const { id } = req.params;
        const item = await pool.query("SELECT * FROM item WHERE item_id = $1", [id]);
        res.json(item.rows[0])
    }catch(err){
        console.error(err.message)
    }
})
//create an item
app.post("/items", async (req, res) => {
    try {
        const {description} = req.body;
        const newItem = await pool.query("INSERT INTO item (description) VALUES ($1) RETURNING *", [description]);
        res.json(newItem.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});

//update an item
app.put("/items/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const {description} = req.body;
        const updateItem = await pool.query("UPDATE item SET description = $1 WHERE item_id = $2", [description, id]
        );
        res.json("Item was updated")
    }catch(err){
        console.error(err.message)
    }
})
//delete an item
app.delete("/items/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const deleteItems = await pool.query("DELETE FROM item WHERE item_id = $1", [id]);
        res.json("Todo was deleted");
    }catch(err){
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("Server is starting on port 5000");
});