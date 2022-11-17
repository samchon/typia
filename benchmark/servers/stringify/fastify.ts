import fastify, { FastifyReply, FastifyRequest } from "fastify";

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

const server = fastify();
const schema = (app: TSON.IJsonApplication) => {
    const definitions: Record<string, TSON.IJsonSchema> = {};
    for (const [key, value] of Object.entries(app.components.schemas))
        definitions[key.replace("#/definitions/", "")] = value;

    return {
        schema: {
            response: {
                200: {
                    ...app.schemas[0]!,
                    definitions,
                },
            },
        },
    };
};
const reply = (data: object) => (_i: FastifyRequest, o: FastifyReply) =>
    o.send(data);

const storage = ServerStorage(true);

server.get(
    "/ObjectSimple",
    schema(TSON.application<[ObjectSimple[]], "ajv", "#/definitions">()),
    reply(storage.ObjectSimple),
);
server.get(
    "/ObjectHierarchical",
    schema(TSON.application<[ObjectHierarchical[]], "ajv", "#/definitions">()),
    reply(storage.ObjectHierarchical),
);
server.get(
    "/ObjectRecursive",
    schema(TSON.application<[ObjectRecursive[]], "ajv", "#/definitions">()),
    reply(storage.ObjectRecursive),
);
server.get(
    "/ObjectUnionExplicit",
    schema(TSON.application<[ObjectUnionExplicit[]], "ajv", "#/definitions">()),
    reply(storage.ObjectUnionExplicit),
);
server.get(
    "/ArraySimple",
    schema(TSON.application<[ArraySimple[]], "ajv", "#/definitions">()),
    reply(storage.ArraySimple),
);
server.get(
    "/ArrayHierarchical",
    schema(TSON.application<[ArrayHierarchical[]], "ajv", "#/definitions">()),
    reply(storage.ArrayHierarchical),
);
server.get(
    "/ArrayRecursive",
    schema(TSON.application<[ArrayRecursive[]], "ajv", "#/definitions">()),
    reply(storage.ArrayRecursive),
);
server.get(
    "/ArrayRecursiveUnionExplicit",
    schema(
        TSON.application<
            [ArrayRecursiveUnionExplicit[]],
            "ajv",
            "#/definitions"
        >(),
    ),
    reply(storage.ArrayRecursiveUnionExplicit),
);

server.listen({ port: 44_444 });
