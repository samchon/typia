import benchmark from "benchmark";
import tgrid from "tgrid";

import { IBenchmarkProgram } from "./IBenchmarkProgram";

export const createSuccessBenchmarkProgram =
  (multipler: number) =>
  <T>(process: (input: T) => any) =>
  async (validate: (input: T) => boolean, skip?: (name: string) => boolean) => {
    const provider: IBenchmarkProgram<T> = {
      type: () => "success",
      success: (input: T): IBenchmarkProgram.IMeasurement => {
        const suite = new benchmark.Suite();
        suite.add("main", () => process(input));
        suite.run();

        return suite.map((elem: benchmark) => {
          const count: number = elem.hz * elem.times.elapsed;
          const size: number =
            multipler * Buffer.from(JSON.stringify(input)).byteLength;

          return {
            amount: size * count,
            time: elem.times.elapsed * 1_000,
          };
        })[0];
      },
      validate,
      skip: skip ?? (() => false),
    };
    const worker = new tgrid.protocols.workers.WorkerServer();
    await worker.open(provider);
  };
