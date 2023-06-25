import fastify from "fastify";
import tgrid from "tgrid";

import { IServerStringifyProgram } from "./IServerStringifyProgram";

export const createFastifyCustomServerStringifyBenchmarkProgram = async <T>(
    stringify: (input: T) => string,
) => {
    // OPEN SERVER
    const server = fastify();

    // PROVIDER
    const provider: IServerStringifyProgram<T> = {
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
