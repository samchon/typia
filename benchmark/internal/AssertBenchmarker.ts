import benchmark from "benchmark";

export namespace AssertBenchmarker {
    export interface IOutput<Components extends "name" | string> {
        name: string;
        result: Record<Components, number | null>;
    }
    export type IParameters<Components extends string, T> = Record<
        Components,
        null | ((input: T[]) => never | T[])
    >;

    export const prepare =
        <Components extends string>(components: Components[]) =>
        <T>(
            name: string,
            generator: () => T,
            trailer: () => T,
            parameters: IParameters<Components, T>,
        ): (() => IOutput<Components>) => {
            // GENERATE DATA TO ASSERT
            const data: T[] = new Array(999).fill("").map(() => generator());
            data.push(trailer());

            const output: IOutput<Components> = {
                name,
                result: {} as any,
            };
            const suite: benchmark.Suite = new benchmark.Suite();

            for (const key of components) {
                const assert = parameters[key];
                if (assert === null) output.result[key] = null;
                else {
                    try {
                        assert(data);
                        output.result[key] = null;
                    } catch {
                        suite.add(key, () => {
                            try {
                                assert(data);
                            } catch {}
                        });
                    }
                }
            }

            return () => {
                suite.run();
                suite.map((elem: benchmark) => {
                    (output as any).result[elem.name!]! =
                        elem.count / elem.times.elapsed;
                });
                return output;
            };
        };
}
