import benchmark from "benchmark";
import tgrid from "tgrid";

import { IBenchmarkProgram } from "./IBenchmarkProgram";

export const createSuccessBenchmarkProgram =
    (multiplier: number) =>
    <T>(process: (input: T) => any) =>
    async (
        validate: (input: T) => boolean,
        skip?: (name: string) => boolean,
    ) => {
        const provider: IBenchmarkProgram<T> = {
            type: () => "success",
            success: (input: T): IBenchmarkProgram.IMeasurement => {
                const suite = new benchmark.Suite();
                suite.add("main", () => process(input));
                suite.run();

                return suite.map((elem: benchmark) => ({
                    amount:
                        multiplier *
                        Buffer.from(JSON.stringify(input)).byteLength *
                        elem.count,
                    time: elem.times.elapsed,
                }))[0];
            },
            validate,
            skip: skip ?? (() => false),
        };
        const worker = new tgrid.protocols.workers.WorkerServer();
        await worker.open(provider);
    };
