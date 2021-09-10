const { Client } = require("pg") 
const express = require('express')
const app = express()
const port = 3000


//middlewares
app.use(express.json())

const client = new Client({
    password: "postgres",
    user: "postgres",
    host: "postgres",
  });


client.connect().then(console.log('DB conexion ready'));
app.listen(port, () => console.log(`Example app listening on port 3000!`))


app.get('/distance',async (req, res) => {
    try {
        const CITY_MODEL = {
          placeOne: req.query.placeone,
          placeTwo: req.query.placetwo,
          unit: req.query.unit ,
        };
        const respons1 = await client.query(`SELECT * FROM city where name = ${ CITY_MODEL.placeOne }`)
        const respons2 = await client.query(`SELECT * FROM city where name = ${ CITY_MODEL.placeTwo }`)

        return res.status(200).json(respons1 + respons2)
    }
    catch(error){
        return res.status(500).json(error);
    }
})

app.post('/', (req, res) =>{
    try {
        const CITY_MODEL = {
          name: req.body.name,
          latitude: req.body.latitude,
          longitude: req.body.longitude ,
        };
        const respons = client.query(`INSERT INTO city (name, latitude, longitude) VALUES( ${CITY_MODEL.name},${CITY_MODEL.latitude},${CITY_MODEL.longitude}  )`)
        return res.status(200).json(CITY_MODEL)
    }
    catch(error){
        return res.status(500).json(error);
    }
})

