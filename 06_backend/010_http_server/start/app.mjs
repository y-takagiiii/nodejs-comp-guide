import * as http from "http";

const server = http.createServer(function(req, res) {
  console.log(req.url);
  if (req.url ==='/hello') {
    // res.endの処理はブラウザで行われるのでwindowオブジェクトが使える
    // それ以外のコードはnode.js場で行われるの(windowオブジェクトは使えない)
    res.end('<script>window.alert("frontend")</script>');
  } else if (req.url === '/bye') {
    res.end('bye');
  }
});

server.listen(8000);