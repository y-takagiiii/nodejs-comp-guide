import * as http from 'http';

/**
 * リクエストメソッド
 * 
 * GETメソッド: コンテンツの取得
 * 　　　タイミング：ブラウザのURL指定、リンクのクリック、<form>のデフォルト
 *      特徴：URLの一部にパラメータを渡す
 * 
 * POSTメソッド: コンテンツの作成
 * 　　　 タイミング：<form>のPOSTメソッド
 *       特徴：リクエストの本文にパラメータを渡す
 */

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
  console.log(req.url);
  if (req.url === '/') {
    res.write(`<a href="/result?param1=1&params2=2">Get Method Link</a>`);
    res.end(`
      <form action="/result" method="POST">
        <input type="text" name="title">
        <input type="submit">
      </form>
    `);
  } else {
    console.log(req.url);
    console.log(req.method);
    if(req.method === "GET") {
      // GETのパラメータを取得
      const queryString = req.url.split("?")[1];
      const params = new URLSearchParams(queryString);
      console.log(params);
      // console.log(params.has('param1'));
    }
    res.end(req.url);
  }
});

server.listen(8000);
