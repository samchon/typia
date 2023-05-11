import fastify from "fastify";
import tgrid from "tgrid";

import { IStringifyServerProgram } from "./IStringifyServerPgoram";

export const createFastifyCustomServerBenchmarkProgram = async <T>(
    stringify: (input: T[]) => string | null,
) => {
    // OPEN SERVER
    const server = fastify();

    // PROVIDER
    const provider: IStringifyServerProgram<T> = {
        open: async (input) => {
            server.get("/stringify", (_, reply) =>
                reply
                    .status(200)
                    .header("Content-Type", "applicataion/json")
                    .send(stringify(input)),
            );
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
