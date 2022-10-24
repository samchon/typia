import benchmark from "benchmark";

export namespace StringifyBenchmarker {
    export interface IOutput {
        name: string;
        "TSON.stringify()": number;
        "TSON.assertStringify()": number;
        "fast-json-stringify": number | null;
        "JSON.stringify()": number;
    }
    export interface IParameters<T> {
        "TSON.stringify()": (input: T) => string;
        "TSON.assertStringify()": (input: T) => string;
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
        suite.add("TSON.stringify()", () =>
            parameters["TSON.stringify()"](data),
        );
        suite.add("TSON.assertStringify()", () =>
            parameters["TSON.assertStringify()"](data),
        );

        return () => {
            const output: IOutput = {
                name,
                "TSON.stringify()": 0,
                "TSON.assertStringify()": 0,
                "JSON.stringify()": 0,
                "fast-json-stringify": null,
            };
            suite.run();
            suite.map((elem: benchmark) => {
                (output as any)[elem.name!] = elem.count / elem.times.elapsed;
            });
            return output;
        };
    }
}
