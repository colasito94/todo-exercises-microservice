<h4 align="center">A To-Do List prioritizer built on top of <a href="http://electron.atom.io" target="_blank">Node.js</a>.</h4>


<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-request-data">How To Request Data</a> •
  <a href="#how-to-receive-data">How To Receive Data</a> •
    <a href="#example">Example</a> •
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

## How To Receive Data
1.  /filter - Data is sent as JSON .

## Example
API request - POST - `http://todo-exercises.herokuapp.com/filter

Returns: 
```

[{"_id":"635d8774d5895b5b546864f5","name":"Math","description":"Do math","score":65,"urgency":"Very","date":"2022-10-29T00:00:00.000Z","__v":0}]

```
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
