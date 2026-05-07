const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Наша база даних з відео
const videos = [
  { 
    id: 1, 
    title: "ХНУРЕ 95 років! Факти про університет, які ти не знав", 
    url: "https://www.youtube.com/embed/J0xC9JjgcTM", 
    description: "Цікаві факти, пам'ятник програмісту та видатні випускники." 
  }
];

// Віддаємо відео фронтенду
app.get("/api/videos", (req, res) => {
  res.json(videos); 
});

app.listen(3000, () => {
  console.log("Сервер запущено на порту 3000");
});