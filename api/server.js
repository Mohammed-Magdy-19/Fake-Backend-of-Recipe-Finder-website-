import { create, router as _router, defaults } from "json-server";
import auth from "json-server-auth";
import { join } from "path";

const app = create();
const router = _router(join(__dirname, "../db.json"));
const middlewares = defaults();

app.db = router.db;

app.use(middlewares);
app.use(auth);
app.use(router);

export default app;