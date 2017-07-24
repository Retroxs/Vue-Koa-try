const Koa = require("koa");
const router = require("koa-router")(); //封装路由
const bodyParser = require("koa-bodyparser"); //解析request的body
const logger = require("koa-logger");
const static_server = require("koa-static");
const path = require("path");
const api = require("./routes/index");
const proxy = require("koa-proxy");
const app = new Koa();

app.use(bodyParser());//必须放在路由之前
app.use(logger());

router.use('/api',api.routes());//将分离的router挂载到koa-router上

app.use(router.routes()); //将路由挂在到koa上
app.use(static_server(path.resolve("../dist")));

//代理服务
app.use(proxy({
	host:"https://www.v2ex.com"
}));

app.listen(3000);
console.log("app started at port 3000");
