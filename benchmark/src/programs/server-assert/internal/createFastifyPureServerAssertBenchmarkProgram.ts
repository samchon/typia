import fastify from "fastify";
import tgrid from "tgrid";
import typia from "typia";

import { IServerAssertProgram } from "./IServerAssertProgram";

export const createFastifyPureServerAssertBenchmarkProgram = async <T>(
  app: typia.IJsonApplication,
) => {
  // OPEN SERVER
  const server = fastify({
    bodyLimit: 50_000_000,
    ajv: {
      customOptions: {
        keywords: [
          "x-typia-tuple",
          "x-typia-jsDocTags",
          "x-typia-typeTags",
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
  const provider: IServerAssertProgram = {
    open: async () => {
      server.post(
        "/assert",
        {
          schema: {
            body: app.schemas[0],
          },
        },
        (_income, outcome) => outcome.send(),
      );
      await server.listen({ port: PORT });
      return PORT;
    },
    close: () => server.close(),
  };

  // OPEN WORKER
  const worker = new tgrid.WorkerServer();
  await worker.open(provider);
};

const PORT = 44_444;
