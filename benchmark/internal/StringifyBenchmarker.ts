import benchmark from "benchmark";

export namespace StringifyBenchmarker {
    export interface IOutput {
        name: string;
        "JSON.stringify()": number;
        ajv: number | null;
        "typescript-json": number;
        ideal: number;
    }
    export interface IParameters<T> {
        ideal: (input: T) => string;
        "typescript-json": (input: T) => string;
        ajv: null | ((input: T) => string);
    }

    export function prepare<T>(
        name: string,
        generator: () => T,
        parameters: IParameters<T>,
    ): () => IOutput {
        const data: T = generator();

        const suite: benchmark.Suite = new benchmark.Suite();
        suite.add("JSON.stringify()", () => JSON.stringify(data));
        if (parameters.ajv !== null)
            suite.add("ajv", () => parameters.ajv!(data));
        suite.add("ideal", () => parameters.ideal(data));
        suite.add("typescript-json", () => parameters["typescript-json"](data));

        return () => {
            const output: IOutput = {
                name,
                "JSON.stringify()": 0,
                ajv: null,
                "typescript-json": 0,
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
