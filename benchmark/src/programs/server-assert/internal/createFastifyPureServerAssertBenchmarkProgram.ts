import fastify from "fastify";
import tgrid from "tgrid";
import typia from "typia";

import { IServerAssertProgram } from "./IServerAssertProgram";

export const createFastifyPureServerAssertBenchmarkProgram = async <T>(
  app: typia.IJsonApplication<"3.0">,
) => {
  // OPEN SERVER
  const server = fastify({
    bodyLimit: 50_000_000,
    ajv: {
      customOptions: {
        strict: true,
        strictNumbers: true,
      },
    },
  });
  for (const [key, value] of Object.entries(app.components.schemas ?? {}))
    server.addSchema({
      ...value,
      $id: `#/components/schemas/${key}`,
    });

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
