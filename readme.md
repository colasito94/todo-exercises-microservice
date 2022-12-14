<h4 align="center">A To-Do List prioritizer built on top of <a href="http://electron.atom.io" target="_blank">Node.js</a>.</h4>


<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-request-data">How To Request Data</a> •
  <a href="#how-to-receive-data">How To Receive Data</a> •
  <a href="#example">Example</a> •
  <a href="#sequence-diagram">Sequence Diagram</a> •
  <a href="#how-to-run">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

-- This is a basic API that receives JSON data of exercises and returns only exercises which not to be prioritized and completed urgently. Data is requested through a POST verb and all responses are returned as JSON.

## Key Features

-- The Following API endpoints are exposed:
- `POST /filter` - Filters the exercise(s) with the "urgency" as "Very" and returns only those exercises(s).


## How To Request Data
1. /filter - Send exercises data as JSON.

The main application/API Gateway will use Fetch API to request data from the microservice. The data sent for the request is in JSON format. See example provided below.

## How To Receive Data
1.  /filter - Data is sent as JSON. The microservice sends the exercise which is filtered as JSON. See example provided below.

## Example
API request - POST - `http://todo-exercises.herokuapp.com/filter

Example JSON:
"exercises": [
                    {
                        "_id": "635d8774d5895b5b546864f5",
                        "name": "Math",
                        "description": "Do math",
                        "score": 65,
                        "urgency": "Very",
                        "date": "2022-10-29T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "635d880dd5895b5b546864fa",
                        "name": "English",
                        "description": "Reading",
                        "score": 80,
                        "urgency": "Nornal",
                        "date": "2022-10-14T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "635d8823d5895b5b546864fd",
                        "name": "Physics",
                        "description": "Research",
                        "score": 80,
                        "urgency": "Normal",
                        "date": "2022-10-08T00:00:00.000Z",
                        "__v": 0
                    }
                    
Returns: 
```

[{"_id":"635d8774d5895b5b546864f5","name":"Math","description":"Do math","score":65,"urgency":"Very","date":"2022-10-29T00:00:00.000Z","__v":0}]

```

## Sequence Diagram

<img width="980" alt="UML Diagram" src="https://user-images.githubusercontent.com/81384896/199005507-488bf78d-92c2-46bf-956e-70591b94a1ab.png">


## How To Build and Run

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/colasito94/todo-exercises-microservice.git

# Go into the repository
$ cd todo-exercises-microservices

# Install dependencies
$ npm install

# Run the app
$ npm start
```

> **Note**


## Download

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)


## Related

-- Related App

## Support

-- *** Buy me a coffee link here***
-- *** Patreon link here ***

## You may also like...

- Sean's App

## License

MIT

---
