import fastify from "fastify";
import tgrid from "tgrid";
import typia from "typia";

import { IServerPerformanceProgram } from "./IServerPerformanceProgram";

export const createFastifyPureServerPerformanceBenchmarkProgram = async <T>(
    app: typia.IJsonApplication,
) => {
    // OPEN SERVER
    const server = fastify({
        ajv: {
            customOptions: {
                keywords: [
                    "x-typia-tuple",
                    "x-typia-metaTags",
                    "x-typia-jsDocTags",
                    "x-typia-required",
                    "x-typia-optional",
                    "x-typia-rest",
                ],
                strict: true,
            },
        },
    });
    for (const value of Object.values(app.components.schemas ?? {}))
        server.addSchema(value);

    // PROVIDER
    const provider: IServerPerformanceProgram = {
        open: async () => {
            server.post(
                "/performance",
                {
                    schema: {
                        body: app.schemas[0],
                        response: {
                            200: {
                                ...app.schemas[0],
                                ...app,
                            },
                        },
                    },
                },
                (income, outcome) => outcome.send(income.body),
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
