import benchmark from "benchmark";
import tgrid from "tgrid";

import { IBenchmarkProgram } from "./IBenchmarkProgram";

export const createFailureBenchmarkProgram =
  <T>(process: (input: T[]) => any) =>
  async (
    validate: (input: T[]) => boolean,
    skip?: (name: string) => boolean,
  ) => {
    const provider: IBenchmarkProgram<T> = {
      type: () => "failure",
      failure: (input: T[]): IBenchmarkProgram.IMeasurement => {
        const suite = new benchmark.Suite();
        suite.add("main", () => process(input));
        suite.run();

        return suite.map((elem: benchmark) => ({
          amount:
            Buffer.from(JSON.stringify(input)).byteLength *
            elem.hz *
            elem.times.elapsed,
          time: elem.times.elapsed * 1_000,
        }))[0];
      },
      validate,
      skip: skip ?? (() => false),
    };
    const worker = new tgrid.protocols.workers.WorkerServer();
    await worker.open(provider);
  };
