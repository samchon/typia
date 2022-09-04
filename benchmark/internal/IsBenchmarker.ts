import benchmark from "benchmark";

export namespace IsBenchmarker {
    export interface IOutput {
        name: string;
        "typescript-json": number;
        "typescript-is": number | null;
        ajv: number | null;
    }
    export interface IParameters<T> {
        "typescript-json": (input: T) => any;
        "typescript-is": null | ((input: T) => any);
        ajv: null | ((input: T) => any);
    }

    export function prepare<T>(
        name: string,
        generator: () => T,
        parameters: IParameters<T>,
    ): () => IOutput {
        const data: T = generator();

        const suite: benchmark.Suite = new benchmark.Suite();
        if (parameters.ajv !== null)
            suite.add("ajv", () => parameters.ajv!(data));
        if (parameters["typescript-is"] !== null)
            suite.add("typescript-is", () =>
                parameters["typescript-is"]!(data),
            );
        suite.add("typescript-json", () => parameters["typescript-json"](data));

        return () => {
            const output: IOutput = {
                name,
                "typescript-json": 0,
                "typescript-is": null,
                ajv: null,
            };
            suite.run();
            suite.map((elem: benchmark) => {
                (output as any)[elem.name as string] = elem.count / elem.times.elapsed;
            });
            return output;
        };
    }
}
