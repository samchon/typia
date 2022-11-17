import express from "express";

import { ServerStorage } from "../ServerStorage";

const server: express.Express = express();
const reply =
    <T>(data: T) =>
    (_req: express.Request, res: express.Response) =>
        res.json(data);

const storage = ServerStorage(true);

server.get("/ObjectSimple", reply(storage.ObjectSimple));
server.get("/ObjectHierarchical", reply(storage.ObjectHierarchical));
server.get("/ObjectRecursive", reply(storage.ObjectRecursive));
server.get("/ObjectUnionExplicit", reply(storage.ObjectUnionExplicit));
server.get("/ArraySimple", reply(storage.ArraySimple));
server.get("/ArrayHierarchical", reply(storage.ArrayHierarchical));
server.get("/ArrayRecursive", reply(storage.ArrayRecursive));
server.get(
    "/ArrayRecursiveUnionExplicit",
    reply(storage.ArrayRecursiveUnionExplicit),
);

server.listen({ port: 22_222 });
