
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

const dummyData = [{breed: "Citron Cockatoo", image_url: "https://www.thesprucepets.com/thmb/iXe2TCpVC3iDEa5ykHLswC9GoPw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sumba-citron-crested-cockatoo-588192431-58ad93a43df78c345b86dc9b.jpg"},
{breed: "African Grey Parrot", image_url: "https://www.thesprucepets.com/thmb/JNt5dEZoK3--NM9KtANBA4n3LF0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/african-grey-parrot--psittacus-erithacus--captive-121805814-5b4bf98346e0fb003790af41.jpg"},
{breed: "Macaws", image_url: "https://www.thesprucepets.com/thmb/wRRJDsxUxNmpfTI1ED0qSBrZcac=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-717160057-5bfeea7ac9e77c00510bc664.jpg"},
{breed: "Conures", image_url: "https://www.thesprucepets.com/thmb/BsXHof469SOnayqxlaf2_-i_iGw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-997122724-5bf97e3ec9e77c0026c15ef6.jpg"},
{breed: "Cockatoos", image_url: "https://www.thesprucepets.com/thmb/XNXNRu0ZWqwagd2ZdywhD5jR0N4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-522664558-57cea6265f9b5829f4d4c3e2.jpg"}];


app.get('/', (req, res) => {
    res.json(dummyData);
})


app.listen(PORT, () => {
    console.log("app listening on port " + PORT)
});