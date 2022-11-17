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
const pure =
    <T>(data: T) =>
    (_req: express.Request, res: express.Response) =>
        res.json(data);

const boost =
    <T>(stringify: (input: T) => string | null) =>
    (data: T) =>
    (_req: express.Request, res: express.Response) =>
        res
            .status(200)
            .header("Content-Type", "application/json")
            .send(stringify(data));

const storage = ServerStorage(true);

//----
// PURE
//----
server.get("/express/ObjectSimple", pure(storage.ObjectSimple));
server.get("/express/ObjectHierarchical", pure(storage.ObjectHierarchical));
server.get("/express/ObjectRecursive", pure(storage.ObjectRecursive));
server.get("/express/ObjectUnionExplicit", pure(storage.ObjectUnionExplicit));
server.get("/express/ArraySimple", pure(storage.ArraySimple));
server.get("/express/ArrayHierarchical", pure(storage.ArrayHierarchical));
server.get("/express/ArrayRecursive", pure(storage.ArrayRecursive));
server.get(
    "/express/ArrayRecursiveUnionExplicit",
    pure(storage.ArrayRecursiveUnionExplicit),
);

//----
// STRINGIFY
//----
server.get(
    "/stringify/ObjectSimple",
    boost(TSON.createStringify<ObjectSimple[]>())(storage.ObjectSimple),
);
server.get(
    "/stringify/ObjectHierarchical",
    boost(TSON.createStringify<ObjectHierarchical[]>())(
        storage.ObjectHierarchical,
    ),
);
server.get(
    "/ObjectRecursive",
    boost(TSON.createStringify<ObjectRecursive[]>())(storage.ObjectRecursive),
);
server.get(
    "/stringify/ObjectUnionExplicit",
    boost(TSON.createStringify<ObjectUnionExplicit[]>())(
        storage.ObjectUnionExplicit,
    ),
);

server.get(
    "/stringify/ArraySimple",
    boost(TSON.createStringify<ArraySimple[]>())(storage.ArraySimple),
);
server.get(
    "/stringify/ArrayHierarchical",
    boost(TSON.createStringify<ArrayHierarchical[]>())(
        storage.ArrayHierarchical,
    ),
);
server.get(
    "/stringify/ArrayRecursive",
    boost(TSON.createStringify<ArrayRecursive[]>())(storage.ArrayRecursive),
);
server.get(
    "/stringify/ArrayRecursiveUnionExplicit",
    boost(TSON.createStringify<ArrayRecursiveUnionExplicit[]>())(
        storage.ArrayRecursiveUnionExplicit,
    ),
);

// IS_STRINGIFY
server.get(
    "/isStringify/ObjectSimple",
    boost(TSON.createIsStringify<ObjectSimple[]>())(storage.ObjectSimple),
);
server.get(
    "/isStringify/ObjectHierarchical",
    boost(TSON.createIsStringify<ObjectHierarchical[]>())(
        storage.ObjectHierarchical,
    ),
);
server.get(
    "/isStringify/ObjectRecursive",
    boost(TSON.createIsStringify<ObjectRecursive[]>())(storage.ObjectRecursive),
);
server.get(
    "/isStringify/ObjectUnionExplicit",
    boost(TSON.createIsStringify<ObjectUnionExplicit[]>())(
        storage.ObjectUnionExplicit,
    ),
);

server.get(
    "/isStringify/ArraySimple",
    boost(TSON.createIsStringify<ArraySimple[]>())(storage.ArraySimple),
);
server.get(
    "/isStringify/ArrayHierarchical",
    boost(TSON.createIsStringify<ArrayHierarchical[]>())(
        storage.ArrayHierarchical,
    ),
);
server.get(
    "/isStringify/ArrayRecursive",
    boost(TSON.createIsStringify<ArrayRecursive[]>())(storage.ArrayRecursive),
);
server.get(
    "/isStringify/ArrayRecursiveUnionExplicit",
    boost(TSON.createIsStringify<ArrayRecursiveUnionExplicit[]>())(
        storage.ArrayRecursiveUnionExplicit,
    ),
);

// ASSERT_STRINGIFY
server.get(
    "/assertStringify/ObjectSimple",
    boost(TSON.createAssertStringify<ObjectSimple[]>())(storage.ObjectSimple),
);
server.get(
    "/assertStringify/ObjectHierarchical",
    boost(TSON.createAssertStringify<ObjectHierarchical[]>())(
        storage.ObjectHierarchical,
    ),
);
server.get(
    "/assertStringify/ObjectRecursive",
    boost(TSON.createAssertStringify<ObjectRecursive[]>())(
        storage.ObjectRecursive,
    ),
);
server.get(
    "/assertStringify/ObjectUnionExplicit",
    boost(TSON.createAssertStringify<ObjectUnionExplicit[]>())(
        storage.ObjectUnionExplicit,
    ),
);

server.get(
    "/assertStringify/ArraySimple",
    boost(TSON.createAssertStringify<ArraySimple[]>())(storage.ArraySimple),
);
server.get(
    "/assertStringify/ArrayHierarchical",
    boost(TSON.createAssertStringify<ArrayHierarchical[]>())(
        storage.ArrayHierarchical,
    ),
);
server.get(
    "/assertStringify/ArrayRecursive",
    boost(TSON.createAssertStringify<ArrayRecursive[]>())(
        storage.ArrayRecursive,
    ),
);
server.get(
    "/assertStringify/ArrayRecursiveUnionExplicit",
    boost(TSON.createAssertStringify<ArrayRecursiveUnionExplicit[]>())(
        storage.ArrayRecursiveUnionExplicit,
    ),
);

server.listen({ port: 33_333 });
