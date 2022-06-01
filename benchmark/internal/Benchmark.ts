import benchmark from "benchmark";

export namespace Benchmark {
    export interface IOutput {
        name: string;
        json: number;
        v2: number;
        v3: number;
    }

    export function prepare<T>(
        getter: () => T,
        v2: (input: T) => string,
        v3: (input: T) => string,
    ) {
        const data: T = getter();

        const suite: benchmark.Suite = new benchmark.Suite();
        suite.add("v3", () => v3(data));
        suite.add("v2", () => v2(data));
        suite.add("json", () => JSON.stringify(data));

        return () => {
            const output: IOutput = {
                name: getter.name,
                json: 0,
                v2: 0,
                v3: 0,
            };

            suite.run();
            suite.map((elem: benchmark) => {
                (output as any)[elem.name] = elem.count / elem.times.elapsed;
            });

            return output;
        };
    }
}
