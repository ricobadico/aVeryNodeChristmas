const http = require("http");
const { greet } = require("./greet");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(`<!DOCTYPE html><html><head><title>${greet()}</title></head>`);
    res.write(`<body><h1>${greet()}</h1></body>`);
    res.write("</html>");
    res.end();
});

server.listen(8000, () => {
    console.log("Listening on port 8000");
})