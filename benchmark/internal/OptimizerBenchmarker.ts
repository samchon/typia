import benchmark from "benchmark";

export namespace OptimizerBenchmarker {
    export interface IOutput {
        category: string;
        result: {
            "typescript-json": number;
            ajv: number | null;
            typebox: number | null;
        };
    }
    export interface IParameters<T> {
        "typescript-json": () => (input: T) => boolean;
        ajv: () => null | ((input: T) => boolean);
        typebox: () => null | ((input: T) => boolean);
    }

    export function prepare<T>(
        category: string,
        generator: () => T,
        parameters: IParameters<T>,
    ): () => IOutput {
        const data: T = generator();
        const ajv = parameters["ajv"]();
        const typebox = parameters["typebox"]();

        const suite: benchmark.Suite = new benchmark.Suite();
        suite.add("typescript-json", () =>
            parameters["typescript-json"]()(data),
        );
        if (typebox !== null) suite.add("typebox", () => typebox!(data));
        if (ajv !== null) suite.add("ajv", () => ajv!(data));

        const output: IOutput = {
            category,
            result: {
                "typescript-json": 0,
                typebox: 0,
                ajv: null,
            },
        };

        return () => {
            suite.run();
            suite.map((elem: benchmark) => {
                (output.result as any)[elem.name!] =
                    elem.count / elem.times.elapsed;
            });
            return output;
        };
    }
}
