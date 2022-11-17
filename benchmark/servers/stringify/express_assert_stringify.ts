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
    <T>(stringify: (input: T) => string) =>
    (data: T) =>
    (_req: express.Request, res: express.Response) =>
        res
            .status(200)
            .header("Content-Type", "application/json")
            .send(stringify(data));

const storage = ServerStorage(true);

server.get(
    "/ObjectSimple",
    reply(TSON.createAssertStringify<ObjectSimple[]>())(storage.ObjectSimple),
);
server.get(
    "/ObjectHierarchical",
    reply(TSON.createAssertStringify<ObjectHierarchical[]>())(
        storage.ObjectHierarchical,
    ),
);
server.get(
    "/ObjectRecursive",
    reply(TSON.createAssertStringify<ObjectRecursive[]>())(
        storage.ObjectRecursive,
    ),
);
server.get(
    "/ObjectUnionExplicit",
    reply(TSON.createAssertStringify<ObjectUnionExplicit[]>())(
        storage.ObjectUnionExplicit,
    ),
);

server.get(
    "/ArraySimple",
    reply(TSON.createAssertStringify<ArraySimple[]>())(storage.ArraySimple),
);
server.get(
    "/ArrayHierarchical",
    reply(TSON.createAssertStringify<ArrayHierarchical[]>())(
        storage.ArrayHierarchical,
    ),
);
server.get(
    "/ArrayRecursive",
    reply(TSON.createAssertStringify<ArrayRecursive[]>())(
        storage.ArrayRecursive,
    ),
);
server.get(
    "/ArrayRecursiveUnionExplicit",
    reply(TSON.createAssertStringify<ArrayRecursiveUnionExplicit[]>())(
        storage.ArrayRecursiveUnionExplicit,
    ),
);

server.listen({ port: 33_335 });
