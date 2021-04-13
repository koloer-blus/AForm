const Mock = require('mockjs');
const Router = require('koa-router');

let data = new Router
data.get('/data', async ctx => {
  ctx.body = Mock.mock({
    'array|1-10': [
      {
        'name': Mock.mock('@cname')
      }
    ]
  });
});

data.get('/list', async ctx => {
  ctx.body = Mock.mock({
    'array|1000000-10000000000': [
      {
        'name': Mock.mock('@cname'),
        'year': Mock.mock('@cname'),
        "rate|1-10": "★",
        "array|1": [
          "AMD",
          "CMD",
          "UMD"
        ],
        "foo": "Hello",
        "nested": {
          "a": {
            "b": {
              "c": "Mock.js"
            }
          }
        },
        "absolutePath": "@/foo @/nested/a/b/c"
      }
    ]
  });
});

module.exports = data;
