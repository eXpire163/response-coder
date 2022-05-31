# response-coder

simple express server that can be used to test your code against **http status codes**

## where to find:

@ github: https://github.com/eXpire163/response-coder \
@ docker.hub: https://hub.docker.com/r/expire163/response-coder

## usage

Server runs on **port 8181** if you need a different one, change it in the `index.js` and `Dockerfile`

`/statuscode/:code` to get the status code you want

> `/statuscode/200` for a nice 200

`/timeout/:duration` for a response after defined milliseconds

> `/timeout/3000` will answer with a 200 after 3 seconds
