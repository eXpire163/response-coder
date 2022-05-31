# response-coder

simple express server that can be used to test your code against http status codes

## usage

`/statuscode/:code` to get the status code you want

> `/statuscode/:200` for a nice 200

`/timeout/:duration` for a response after defined milliseconds

> `/timeout/:3000` will answer with a 200 after 3 seconds
