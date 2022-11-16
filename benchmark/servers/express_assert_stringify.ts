import express from "express";

import TSON from "../../src";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ServerStorage } from "./ServerStorage";

const server: express.Express = express();
const reply =
    <T>(stringify: (input: T) => string) =>
    (data: T) =>
    (_req: express.Request, res: express.Response) =>
        res
            .status(200)
            .header("Content-Type", "application/json")
            .send(stringify(data));

server.get(
    "/ObjectSimple",
    reply(TSON.createAssertStringify<ObjectSimple[]>())(
        ServerStorage.ObjectSimple,
    ),
);
server.get(
    "/ObjectHierarchical",
    reply(TSON.createAssertStringify<ObjectHierarchical[]>())(
        ServerStorage.ObjectHierarchical,
    ),
);
server.get(
    "/ObjectRecursive",
    reply(TSON.createAssertStringify<ObjectRecursive[]>())(
        ServerStorage.ObjectRecursive,
    ),
);
server.get(
    "/ObjectUnionExplicit",
    reply(TSON.createAssertStringify<ObjectUnionExplicit[]>())(
        ServerStorage.ObjectUnionExplicit,
    ),
);
server.get(
    "/ArrayRecursive",
    reply(TSON.createAssertStringify<ArrayRecursive[]>())(
        ServerStorage.ArrayRecursive,
    ),
);
server.get(
    "/ArrayRecursiveUnionExplicit",
    reply(TSON.createAssertStringify<ArrayRecursiveUnionExplicit[]>())(
        ServerStorage.ArrayRecursiveUnionExplicit,
    ),
);

server.listen({ port: 33_335 });
