import benchmark from "benchmark";

export namespace StringifyBenchmarker {
    export interface IOutput {
        name: string;
        "typescript-json": number;
        "fast-json-stringify": number | null;
        "JSON.stringify()": number;
        ideal: number;
    }
    export interface IParameters<T> {
        ideal: (input: T) => string;
        "typescript-json": (input: T) => string;
        "fast-json-stringify": null | ((input: T) => string);
    }

    export function prepare<T>(
        name: string,
        generator: () => T,
        parameters: IParameters<T>,
    ): () => IOutput {
        const data: T = generator();

        const suite: benchmark.Suite = new benchmark.Suite();
        suite.add("JSON.stringify()", () => JSON.stringify(data));
        if (parameters["fast-json-stringify"] !== null)
            suite.add("fast-json-stringify", () =>
                parameters["fast-json-stringify"]!(data),
            );
        suite.add("ideal", () => parameters.ideal(data));
        suite.add("typescript-json", () => parameters["typescript-json"](data));

        return () => {
            const output: IOutput = {
                name,
                "typescript-json": 0,
                "fast-json-stringify": null,
                "JSON.stringify()": 0,
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
