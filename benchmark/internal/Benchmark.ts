import benchmark from "benchmark";

export namespace BenchmarkGenerator {
    export interface IOutput {
        name: string;
        json: number;
        ajv: number | null;
        tson: number;
        ideal: number;
    }
    export interface IParameters<T> {
        ideal: (input: T) => string;
        tson: (input: T) => string;
        ajv: null | ((input: T) => string);
    }

    export function prepare<T>(
        name: string,
        generator: () => T,
        parameters: IParameters<T>,
    ): () => IOutput {
        const data: T = generator();

        const suite: benchmark.Suite = new benchmark.Suite();
        suite.add("json", () => JSON.stringify(data));
        if (parameters.ajv !== null)
            suite.add("ajv", () => parameters.ajv!(data));
        suite.add("ideal", () => parameters.ideal(data));
        suite.add("tson", () => parameters.tson(data));

        return () => {
            const output: IOutput = {
                name,
                json: 0,
                ajv: null,
                tson: 0,
                ideal: 0,
            };

            suite.run();
            suite.map((elem: benchmark) => {
                (output as any)[elem.name] = elem.count / elem.times.elapsed;
            });

            return output;
        };
    }
}
