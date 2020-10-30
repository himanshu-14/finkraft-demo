// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require('cors');
require('dotenv').config();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(cors());
app.use(express.static("public"));
app.get("/contacts", async (req, res) => {
    const options = {
        headers: {
            Authorization: "Zoho-authtoken db36e02a50b57e081efe533a8a0f834b"
        },
        params: {
            organization_id: 649249007
        }
    };

    const axiosRes = await axios.get(process.env.zohoUrl, options);
    console.log(axiosRes);

    res.json(axiosRes.data);
});

// https://expressjs.com/en/starter/basic-routing.html
// app.get("/", (request, response) => {
//   response.sendFile(__dirname + "/views/index.html");
// });

// send the default array of dreams to the webpage
// app.get("/dreams", (request, response) => {
//   // express helps us take JS objects and send them as JSON
//   response.json(dreams);
// });

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
