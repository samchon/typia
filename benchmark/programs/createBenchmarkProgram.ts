import benchmark from "benchmark";
import tgrid from "tgrid";

import { IMeasurement } from "../structures/IMeasurement";
import { IBenchmarkProgram } from "./IBenchmarkProgram";

export const createBenchmarkProgram =
    <T>(process: (input: T) => any) =>
    async (
        validate: (input: T) => boolean,
        skip?: (name: string) => boolean,
    ) => {
        const provider: IBenchmarkProgram<T> = {
            measure: (input: T): IMeasurement => {
                const suite = new benchmark.Suite();
                suite.add("main", () => process(input));
                suite.run();

                return suite.map((elem: benchmark) => ({
                    count: elem.count,
                    time: elem.times.elapsed,
                }))[0];
            },
            validate,
            skip: skip ?? (() => false),
        };

        const worker = new tgrid.protocols.workers.WorkerServer();
        await worker.open(provider);
    };
