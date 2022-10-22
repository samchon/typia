import benchmark from "benchmark";

export namespace IsBenchmarker {
    export interface IOutput {
        name: string;
        "typescript-json": number | null;
        "io-ts": number | null;
        zod: number | null;
        typebox: number | null;
        "class-validator": number | null;
        ajv: number | null;
    }
    export interface IParameters<T> {
        "typescript-json": (input: T) => boolean;
        "io-ts": (input: T) => boolean;
        "class-validator": (input: T) => boolean;
        zod: (input: T) => boolean;
        typebox: (input: T) => boolean;
        ajv: (input: T) => boolean;
    }

    export function prepare<T>(
        name: string,
        generator: () => T,
        parameters: IParameters<T>,
        spoilers: Array<(input: T) => string[]>,
    ): () => IOutput {
        const data: T = generator();

        const suite: benchmark.Suite = new benchmark.Suite();
        for (const [key, value] of Object.entries(parameters)) {
            if (value(generator()) === false) continue;
            const pass: boolean = spoilers.every((spoil) => {
                const fake: T = generator();
                spoil(fake);
                return value(fake) === false;
            });
            if (pass === true) suite.add(key, () => value(data));
        }

        return () => {
            const output: IOutput = {
                name,
                "typescript-json": null,
                typebox: null,
                ajv: null,
                "io-ts": null,
                zod: null,
                "class-validator": null,
            };
            suite.run();
            suite.map((elem: benchmark) => {
                (output as any)[elem.name!] = elem.count / elem.times.elapsed;
            });
            return output;
        };
    }
}
