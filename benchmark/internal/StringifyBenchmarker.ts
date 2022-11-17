import benchmark from "benchmark";

export namespace StringifyBenchmarker {
    export interface IOutput<Components extends string> {
        category: string;
        result: Record<Components, number | null>;
        unit: string;
    }
    export type IParameters<Components extends string, T> = Record<
        Components,
        null | ((input: T) => string | null)
    >;

    export const prepare =
        <Components extends string>(components: Components[]) =>
        <T>(
            category: string,
            generator: () => T,
            parameters: IParameters<Components, T>,
        ): (() => IOutput<Components>) => {
            // TO ANTICIPATE OVER-FITTING OPTIMIZATION
            const data: T[] = new Array(10).fill("").map(generator);

            const suite: benchmark.Suite = new benchmark.Suite();
            for (const key of components) {
                const stringify = parameters[key];
                if (stringify !== null)
                    suite.add(key, () => {
                        for (const elem of data) stringify(elem);
                    });
            }

            const size: number = data
                .map((elem) => JSON.stringify(elem).length)
                .reduce((a, b) => a + b);
            const output: IOutput<Components> = {
                category,
                result: {} as any,
                unit: "KB/s",
            };

            return () => {
                suite.run();
                suite.map((elem: benchmark) => {
                    (output.result as any)[elem.name!] =
                        ((elem.count / elem.times.elapsed) * size) / 1_024;
                });
                return output;
            };
        };
}
