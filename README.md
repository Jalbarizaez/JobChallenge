# Node.js and PostgreSQL

For this example is a simple API with node.js and using docker (here with **JavaScript**).

## Run

    docker-compose up --build

## Test

```sh
## Get
curl http://localhost:3000
# {"http://localhost:3000/distance?placeone=Fresno City College&placetwo=Fresno University&unit=km}

## Post
curl http://localhost:3000

{
	"name": "Fresno City College",
	"latitude": 36.76696,
	"longitude": -119.79779
	
}
```

