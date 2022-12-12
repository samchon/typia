import express from "express";

import typia from "../../../src";
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
    reply(typia.createIsStringify<ObjectSimple[]>())(storage.ObjectSimple),
);
server.get(
    "/ObjectHierarchical",
    reply(typia.createIsStringify<ObjectHierarchical[]>())(
        storage.ObjectHierarchical,
    ),
);
server.get(
    "/ObjectRecursive",
    reply(typia.createIsStringify<ObjectRecursive[]>())(
        storage.ObjectRecursive,
    ),
);
server.get(
    "/ObjectUnionExplicit",
    reply(typia.createIsStringify<ObjectUnionExplicit[]>())(
        storage.ObjectUnionExplicit,
    ),
);

server.get(
    "/ArraySimple",
    reply(typia.createIsStringify<ArraySimple[]>())(storage.ArraySimple),
);
server.get(
    "/ArrayHierarchical",
    reply(typia.createIsStringify<ArrayHierarchical[]>())(
        storage.ArrayHierarchical,
    ),
);
server.get(
    "/ArrayRecursive",
    reply(typia.createIsStringify<ArrayRecursive[]>())(storage.ArrayRecursive),
);
server.get(
    "/ArrayRecursiveUnionExplicit",
    reply(typia.createIsStringify<ArrayRecursiveUnionExplicit[]>())(
        storage.ArrayRecursiveUnionExplicit,
    ),
);

server.listen({ port: 33_334 });
