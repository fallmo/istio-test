
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

const dummyData = [{ breed: "British Shorthair", image_url: "https://cats.com/wp-content/uploads/2020/10/british-shorthair-compressed-540x360.jpg" },
{ breed: "Persian", image_url: "https://cats.com/wp-content/uploads/2020/10/white-Persian-540x360.jpg" },
{ breed: "Russian Blue", image_url: "https://cats.com/wp-content/uploads/2020/10/Russian-blue-cat-2-540x360.jpg" },
{ breed: "Ussuri", image_url: "https://cats.com/wp-content/uploads/2016/09/Ussuri-1.jpg" }];


app.get('/', (req, res) => {
    res.json(dummyData);
})


app.listen(PORT, () => {
    console.log("app listening on port " + PORT)
});