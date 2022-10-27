import benchmark from "benchmark";

export namespace IsBenchmarker {
    export interface IOutput<Components extends "name" | string> {
        name: string;
        result: Record<Components, number | null>;
    }
    export type IParameters<Components extends string, T> = Record<
        Components,
        null | ((input: T) => boolean)
    >;

    export const prepare =
        <Components extends string>(components: Components[]) =>
        <T>(
            name: string,
            generator: () => T,
            parameters: IParameters<Components, T>,
            spoilers: Array<(input: T) => string[]>,
        ) => {
            const data: T = generator();

            const suite: benchmark.Suite = new benchmark.Suite();
            for (const key of components) {
                const is = parameters[key];
                if (is !== null) suite.add(key, () => is(data));
            }

            const output: IOutput<Components> = {
                name,
                result: {} as any,
            };
            for (const comp of components) output.result[comp] = null;

            return () => {
                suite.run();
                suite.map((elem: benchmark) => {
                    (output.result as any)[elem.name!] =
                        elem.count / elem.times.elapsed;
                });

                for (const key of components) {
                    if (
                        output.result[key] === null ||
                        parameters[key]!(data) === true ||
                        spoilers.every((spoil) => {
                            const fake: T = generator();
                            spoil(fake);
                            return parameters[key]!(fake) === false;
                        }) ||
                        key === "zod" ||
                        key === "class-validator"
                    )
                        continue;
                    output.result[key] = null;
                }
                return output;
            };
        };
}
