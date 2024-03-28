import fastify from "fastify";
import tgrid from "tgrid";

import { ICollection } from "../../../structures/ICollection";
import { IServerPerformanceProgram } from "./IServerPerformanceProgram";

export const createFastifyCustomServerPerformanceBenchmarkProgram = async <
  T,
  U = T,
>(
  assert: (input: ICollection<T>) => U,
  stringify: (input: U) => string | null,
) => {
  // OPEN SERVER
  const server = fastify({
    bodyLimit: 50_000_000,
  });

  // PROVIDER
  const provider: IServerPerformanceProgram = {
    open: async () => {
      server.post("/performance", (income, outcome) => {
        let data: U = null!;
        try {
          data = assert(income.body as any);
        } catch (exp) {
          outcome.status(400).send((exp as Error).message);
          return;
        }
        outcome
          .status(200)
          .header("Content-Type", "application/json")
          .send(stringify(data));
      });
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
