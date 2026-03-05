import express from "express";
import { Server } from "http";
import tgrid from "tgrid";

import { IServerStringifyProgram } from "./IServerStringifyProgram";

export const createExpressServerStringifyBenchmarkProgram = async <T>(
  stringify: (input: T) => string,
) => {
  // OPEN SERVER
  const modulo = express();
  let server: Server;

  // PROVIDER
  const provider: IServerStringifyProgram<T> = {
    open: async (input) => {
      modulo.get("/stringify", (_, reply) =>
        reply
          .status(200)
          .header("Content-Type", "application/json")
          .send(stringify(input)),
      );
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
