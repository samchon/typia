import fastify, { FastifyReply, FastifyRequest } from "fastify";

import TSON from "../../src";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ServerStorage } from "./ServerStorage";

const server = fastify().withTypeProvider();
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

server.get(
    "/ObjectSimple",
    schema(TSON.application<[ObjectSimple[]], "ajv", "#/definitions">()),
    reply(ServerStorage.ObjectSimple),
);
server.get(
    "/ObjectHierarchical",
    schema(TSON.application<[ObjectHierarchical[]], "ajv", "#/definitions">()),
    reply(ServerStorage.ObjectHierarchical),
);
server.get(
    "/ObjectRecursive",
    schema(TSON.application<[ObjectRecursive[]], "ajv", "#/definitions">()),
    reply(ServerStorage.ObjectRecursive),
);
server.get(
    "/ObjectUnionExplicit",
    schema(TSON.application<[ObjectUnionExplicit[]], "ajv", "#/definitions">()),
    reply(ServerStorage.ObjectUnionExplicit),
);
server.get(
    "/ArrayRecursive",
    schema(TSON.application<[ArrayRecursive[]], "ajv", "#/definitions">()),
    reply(ServerStorage.ArrayRecursive),
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
    reply(ServerStorage.ArrayRecursiveUnionExplicit),
);

server.listen({ port: 44_444 });
