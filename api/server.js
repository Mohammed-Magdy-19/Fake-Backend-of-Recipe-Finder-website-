import jsonServer from "json-server";
import auth from "json-server-auth";
import { join } from "path";

// Modern way to get __dirname in ES Modules (Node.js v20.11+)
const __dirname = import.meta.dirname;

const app = jsonServer.create();
const router = jsonServer.router(join(__dirname, "../db.json"));
const middlewares = jsonServer.defaults();

app.db = router.db;

// Important: Order of middlewares matters
app.use(middlewares);
app.use(auth);           // json-server-auth middleware
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`JSON Server with Auth is running on http://localhost:${PORT}`);
});

export default app;