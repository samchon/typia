import bodyParser from "body-parser";
import express from "express";
import { Server } from "http";
import tgrid from "tgrid";

import { ICollection } from "../../../structures/ICollection";
import { IServerPerformanceProgram } from "./IServerPerformanceProgram";

export const createExpressServerPerformanceBenchmarkProgram = async <T, U>(
  assert: (input: ICollection<T>) => U,
  stringify: (input: U) => string | null,
) => {
  // OPEN SERVER
  const modulo = express();
  modulo.use(bodyParser.json({ limit: "50mb" }));

  // PROVIDER
  let server: Server;
  const provider: IServerPerformanceProgram = {
    open: async () => {
      modulo.post("/performance", (income, outcome) => {
        let data: U = null!;
        try {
          data = assert(income.body);
        } catch (exp) {
          outcome.status(400).send((exp as Error).message);
          return;
        }
        outcome
          .status(200)
          .header("Content-Type", "application/json")
          .send(stringify(data));
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
  const worker = new tgrid.WorkerServer();
  await worker.open(provider);
};

const open = (modulo: express.Express) =>
  new Promise<Server>((resolve) => {
    const server = modulo.listen(PORT);
    server.on("listening", () => resolve(server));
  });

const PORT = 33_333;
