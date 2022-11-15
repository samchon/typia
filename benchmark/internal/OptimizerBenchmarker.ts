import benchmark from "benchmark";

export namespace OptimizerBenchmarker {
    export interface IOutput<Components extends string> {
        category: string;
        result: Record<Components, number | null>;
        unit: string;
    }
    export type IParameters<Components extends string, T> = Record<
        Components,
        null | (() => (input: T) => boolean)
    >;

    export const prepare =
        <Components extends string>(components: Components[]) =>
        <T>(
            category: string,
            generator: () => T,
            parameters: IParameters<Components, T>,
        ): (() => IOutput<Components>) => {
            const data: T = generator();

            const suite: benchmark.Suite = new benchmark.Suite();
            for (const key of components) {
                const factory = parameters[key];
                if (factory !== null) suite.add(key, () => factory()(data));
            }

            const size: number = Buffer.from(JSON.stringify(data)).length;
            const output: IOutput<Components> = {
                category,
                result: {} as any,
                unit: "kilobytes/sec",
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
