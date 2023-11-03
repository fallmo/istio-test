
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

const dummyData = [
    {breed: "French Bulldog", image_url: "https://www.dogbreedslist.info/uploads/dog-pictures/french-bulldog-1.jpg"},
    {breed: "Labdrador Retriever", image_url: "https://www.dogbreedslist.info/uploads/dog-pictures/labrador-retriever-1.jpg"},
    {breed: "Poodle", image_url: "https://www.dogbreedslist.info/uploads/dog-pictures/poodle-1.jpg"},
    {breed: "Rottweiler", image_url: "https://www.dogbreedslist.info/uploads/dog-pictures/rottweiler-1.jpg"},
    {breed: "Miniature Schnauzer", image_url: "https://www.dogbreedslist.info/uploads/dog-pictures/miniature-schnauzer-1.jpg"}
    ];


app.get('/', (req, res) => {
    res.json(dummyData);
})


app.listen(PORT, () => {
    console.log("app listening on port " + PORT)
});