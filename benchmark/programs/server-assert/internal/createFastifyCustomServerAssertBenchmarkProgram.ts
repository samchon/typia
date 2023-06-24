import fastify from "fastify";
import tgrid from "tgrid";

import { ICollection } from "../../../structures/ICollection";
import { IServerAssertProgram } from "./IServerAssertProgram";

export const createFastifyCustomServerAssertBenchmarkProgram = async <T>(
    assert: (input: ICollection<T>) => any,
) => {
    // OPEN SERVER
    const server = fastify({
        bodyLimit: 50_000_000,
    });

    // PROVIDER
    const provider: IServerAssertProgram = {
        open: async () => {
            server.post("/assert", (income, outcome) => {
                try {
                    assert(income.body as any);
                } catch (exp) {
                    outcome.status(400).send((exp as Error).message);
                    return;
                }
                outcome.status(200).send();
            });
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
