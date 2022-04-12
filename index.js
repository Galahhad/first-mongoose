const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 4000;

app.use(express.json());
app.use(require("./routes"));

mongoose.connect('mongodb+srv://Galahad:20030909Bella@cluster0.5mvo4.mongodb.net/Shop').then(() => {
    app.listen(port, () => {
        console.log('Сервер запушен успешно');
        console.log('Успешно соединились с сервером MongoDB');
    })
}).catch(() => console.log('Ошибка при соединении с сервером MongoDB'));