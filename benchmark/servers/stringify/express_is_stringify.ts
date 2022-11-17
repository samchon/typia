import express from "express";

import TSON from "../../../src";
import { ArrayHierarchical } from "../../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../../test/structures/ArrayRecursiveUnionExplicit";
import { ArraySimple } from "../../../test/structures/ArraySimple";
import { ObjectHierarchical } from "../../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../../test/structures/ObjectUnionExplicit";
import { ServerStorage } from "../ServerStorage";

const server: express.Express = express();
const reply =
    <T>(stringify: (input: T) => string | null) =>
    (data: T) =>
    (_req: express.Request, res: express.Response) =>
        res
            .status(200)
            .header("Content-Type", "application/json")
            .send(stringify(data));

const storage = ServerStorage(true);

server.get(
    "/ObjectSimple",
    reply(TSON.createIsStringify<ObjectSimple[]>())(storage.ObjectSimple),
);
server.get(
    "/ObjectHierarchical",
    reply(TSON.createIsStringify<ObjectHierarchical[]>())(
        storage.ObjectHierarchical,
    ),
);
server.get(
    "/ObjectRecursive",
    reply(TSON.createIsStringify<ObjectRecursive[]>())(storage.ObjectRecursive),
);
server.get(
    "/ObjectUnionExplicit",
    reply(TSON.createIsStringify<ObjectUnionExplicit[]>())(
        storage.ObjectUnionExplicit,
    ),
);

server.get(
    "/ArraySimple",
    reply(TSON.createIsStringify<ArraySimple[]>())(storage.ArraySimple),
);
server.get(
    "/ArrayHierarchical",
    reply(TSON.createIsStringify<ArrayHierarchical[]>())(
        storage.ArrayHierarchical,
    ),
);
server.get(
    "/ArrayRecursive",
    reply(TSON.createIsStringify<ArrayRecursive[]>())(storage.ArrayRecursive),
);
server.get(
    "/ArrayRecursiveUnionExplicit",
    reply(TSON.createIsStringify<ArrayRecursiveUnionExplicit[]>())(
        storage.ArrayRecursiveUnionExplicit,
    ),
);

server.listen({ port: 33_334 });
