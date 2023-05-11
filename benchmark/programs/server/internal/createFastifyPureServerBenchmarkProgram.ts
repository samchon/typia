import fastify from "fastify";
import tgrid from "tgrid";
import typia from "typia";

import { IStringifyServerProgram } from "./IStringifyServerPgoram";

export const createFastifyPureServerBenchmarkProgram = async <T>(
    app: typia.IJsonApplication,
) => {
    // DEFINE JSON-SCHEMA
    const schema = {
        response: {
            200: {
                ...app.schemas[0],
                ...app,
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
