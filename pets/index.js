
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 8080;

async function getServiceData(service) {
    try {
        const resp = await fetch(service + "/");
        const data = await resp.json();
        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}

const requiredEnv = ["DOGS_SERVICE", "CATS_SERVICE", "BIRDS_SERVICE"];

for (const env of requiredEnv) {
    if (process.env[env]) continue;
    console.error(`Environment Variable ${env} not found.`);
    process.exit(1);
}

app.get('/pets', async (req, res) => {
    return res.json({
        success: true,
        data: {
            dogs: await getServiceData(process.env.DOGS_SERVICE),
            cats: await getServiceData(process.env.CATS_SERVICE),
            birds: await getServiceData(process.env.BIRDS_SERVICE),
        }
    })
})


app.get('/', (req, res) => {
    res.send("hello");
})


app.listen(PORT, () => {
    console.log("app listening on port " + PORT)
});