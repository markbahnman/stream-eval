## Streaming

You can find the duplex steam which consumes the initial input stream in ```src/Tapper.js``` and the summarizing stream in ```src/Summer.js```

### Testing

Install dependencies for compilation/testing with ```npm install``` or ```yarn install```

Create a big file to stream into our script with ```npm run lorem``` for a small file or ```npm run lorem-big``` for a much bigger file.

Then ```npm test``` will build the project and stream our test file into it.

Some unit tests can also be run with ```npm run unit```
