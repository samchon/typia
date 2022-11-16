import express from "express";

import { ServerStorage } from "./ServerStorage";

const server: express.Express = express();
const reply =
    <T>(data: T) =>
    (_req: express.Request, res: express.Response) =>
        res.json(data);

server.get("/ObjectSimple", reply(ServerStorage.ObjectSimple));
server.get("/ObjectHierarchical", reply(ServerStorage.ObjectHierarchical));
server.get("/ObjectRecursive", reply(ServerStorage.ObjectRecursive));
server.get("/ObjectUnionExplicit", reply(ServerStorage.ObjectUnionExplicit));
server.get("/ArrayRecursive", reply(ServerStorage.ArrayRecursive));
server.get(
    "/ArrayRecursiveUnionExplicit",
    reply(ServerStorage.ArrayRecursiveUnionExplicit),
);

server.listen({ port: 22_222 });
