import bodyParser from "body-parser";
import express from "express";
import { Server } from "http";
import tgrid from "tgrid";

import { ICollection } from "../../../structures/ICollection";
import { IServerAssertProgram } from "./IServerAssertProgram";

export const createExpressServerAssertBenchmarkProgram = async <T>(
    assert: (input: ICollection<T>) => any,
) => {
    // OPEN SERVER
    const modulo = express();
    modulo.use(bodyParser.json({ limit: "50mb" }));

    // PROVIDER
    let server: Server;
    const provider: IServerAssertProgram = {
        open: async () => {
            modulo.post("/assert", (income, outcome) => {
                try {
                    assert(income.body);
                } catch (exp) {
                    outcome.status(400).send((exp as Error).message);
                    return;
                }
                outcome.status(200).send();
            });
            server = await open(modulo);
            return PORT;
        },
        close: () =>
            new Promise((resolve, reject) => {
                server.close((err) => {
                    if (err) reject(err);
                    else resolve();
                });
            }),
    };

    // OPEN WORKER
    const worker = new tgrid.protocols.workers.WorkerServer();
    await worker.open(provider);
};

const open = (modulo: express.Express) =>
    new Promise<Server>((resolve) => {
        const server = modulo.listen(PORT);
        server.on("listening", () => resolve(server));
    });

const PORT = 33_333;
