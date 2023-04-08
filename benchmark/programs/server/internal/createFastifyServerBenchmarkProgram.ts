import fastify from "fastify";
import tgrid from "tgrid";
import typia from "typia";

import { IStringifyServerProgram } from "./IStringifyServerPgoram";

export const createFastifyServerBenchmarkProgram = async <T>(
    app: typia.IJsonApplication,
) => {
    // DEFINE RESPONSE DTO THROUGH JSON-SCHEMA
    const definitions: Record<string, typia.IJsonSchema> = {};
    for (const [key, value] of Object.entries(app.components.schemas))
        definitions[key.replace("#/definitions/", "")] = value;
    const schema = {
        response: {
            200: {
                ...app.schemas[0],
                definitions,
            },
        },
    };

    // OPEN SERVER
    const server = fastify();

    // PROVIDER
    const provider: IStringifyServerProgram<T> = {
        open: async (input) => {
            server.get("/stringify", { schema }, (_i, o) => o.send(input));
            await server.listen({ port: PORT });
            return PORT;
        },
        close: () => server.close(),
    };

    // OPEN WORKER
    const worker = new tgrid.protocols.workers.WorkerServer();
    await worker.open(provider);
};

const PORT = 44_444;
