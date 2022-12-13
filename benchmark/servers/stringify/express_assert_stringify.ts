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
    reply(typia.createAssertStringify<ObjectSimple[]>())(storage.ObjectSimple),
);
server.get(
    "/ObjectHierarchical",
    reply(typia.createAssertStringify<ObjectHierarchical[]>())(
        storage.ObjectHierarchical,
    ),
);
server.get(
    "/ObjectRecursive",
    reply(typia.createAssertStringify<ObjectRecursive[]>())(
        storage.ObjectRecursive,
    ),
);
server.get(
    "/ObjectUnionExplicit",
    reply(typia.createAssertStringify<ObjectUnionExplicit[]>())(
        storage.ObjectUnionExplicit,
    ),
);

server.get(
    "/ArraySimple",
    reply(typia.createAssertStringify<ArraySimple[]>())(storage.ArraySimple),
);
server.get(
    "/ArrayHierarchical",
    reply(typia.createAssertStringify<ArrayHierarchical[]>())(
        storage.ArrayHierarchical,
    ),
);
server.get(
    "/ArrayRecursive",
    reply(typia.createAssertStringify<ArrayRecursive[]>())(
        storage.ArrayRecursive,
    ),
);
server.get(
    "/ArrayRecursiveUnionExplicit",
    reply(typia.createAssertStringify<ArrayRecursiveUnionExplicit[]>())(
        storage.ArrayRecursiveUnionExplicit,
    ),
);

server.listen({ port: 33_335 });
