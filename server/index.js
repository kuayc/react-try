const express = require("express");
const { getTodo, postTodo } = require("./Controllers/todo");
const app = express();

app.use(express.json());

app.get("/api/", getTodo);
app.post("/api/", postTodo);
app.put("/api/:id");
app.delete("/api/:id");

const PORT = 5000;

app.listen(PORT, () => console.log(`Big Bro watching PORT ${PORT}`));
