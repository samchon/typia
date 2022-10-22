import benchmark from "benchmark";

export namespace IsBenchmarker {
    export interface IOutput {
        name: string;
        "typescript-json": number;
        "io-ts": number | null;
        zod: number | null;
        typebox: number | null;
        "class-validator": number | null;
        "ajv-spec": number | null;
        ajv: number | null;
    }
    export interface IParameters<T> {
        "typescript-json": (input: T) => any;
        "io-ts": null | ((input: T) => any);
        "class-validator": null | ((input: T) => any);
        zod: null | ((input: T) => any);
        typebox: null | ((input: T) => any);
        "ajv-spec": null | ((input: T) => any);
        ajv: null | ((input: T) => any);
    }

    export function prepare<T>(
        name: string,
        generator: () => T,
        parameters: IParameters<T>,
    ): () => IOutput {
        const data: T = generator();

        const suite: benchmark.Suite = new benchmark.Suite();
        if (parameters.typebox !== null)
            suite.add("typebox", () => parameters.typebox!(data));
        if (parameters.ajv !== null)
            suite.add("ajv", () => parameters.ajv!(data));
        if (parameters["ajv-spec"] !== null)
            suite.add("ajv-spec", () => parameters["ajv-spec"]!(data));
        if (parameters["io-ts"] !== null)
            suite.add("io-ts", () => parameters["io-ts"]!(data));
        if (parameters.zod !== null)
            suite.add("zod", () => parameters.zod!(data));
        if (parameters["class-validator"] !== null)
            suite.add("class-validator", () =>
                parameters["class-validator"]!(data),
            );
        suite.add("typescript-json", () => parameters["typescript-json"](data));

        return () => {
            const output: IOutput = {
                name,
                "typescript-json": 0,
                typebox: null,
                ajv: null,
                "ajv-spec": null,
                "io-ts": null,
                "class-validator": null,
                zod: null,
            };
            suite.run();
            suite.map((elem: benchmark) => {
                (output as any)[elem.name!] = elem.count / elem.times.elapsed;
            });
            return output;
        };
    }
}
