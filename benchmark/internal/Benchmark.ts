import benchmark from "benchmark";

export namespace BenchmarkGenerator {
    export interface IOutput {
        name: string;
        json: number;
        ajv: number;
        tson: number;
    }

    export function prepare<T>(
        name: string,
        getter: () => T,
        v2: (input: T) => string,
        v3: (input: T) => string,
    ): () => IOutput {
        const data: T = getter();

        const suite: benchmark.Suite = new benchmark.Suite();
        suite.add("json", () => JSON.stringify(data));
        suite.add("ajv", () => v2(data));
        suite.add("tson", () => v3(data));

        return () => {
            const output: IOutput = {
                name,
                json: 0,
                ajv: 0,
                tson: 0,
            };

            suite.run();
            suite.map((elem: benchmark) => {
                (output as any)[elem.name] = elem.count / elem.times.elapsed;
            });

            return output;
        };
    }
}
