/**
 * Created by HUI on 2017/7/17.
 */
const router = require("koa-router")();
router.get("/:name",async(ctx,next) => {
  let name = ctx.params.name;
  ctx.body = `Hello ${name}`;
});

router.post("/hello",async ctx => {
  let name = ctx.request.body.name;
  ctx.body = `Hello ${name}`;
});

module.exports =router;

