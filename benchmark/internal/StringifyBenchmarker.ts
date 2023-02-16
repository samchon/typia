import benchmark from "benchmark";

export namespace StringifyBenchmarker {
    export interface IOutput<Components extends string> {
        category: string;
        result: Record<Components, number | null>;
        unit: string;
    }
    export type IParameters<Components extends string, T> = Record<
        Components,
        | null
        | ((input: T) => string | null)
        | {
              transform: (input: T) => T;
              stringify: (input: T) => string;
          }
    >;

    export const prepare =
        <Components extends string>(components: Components[]) =>
        <T>(
            category: string,
            generator: () => T,
            parameters: IParameters<Components, T>,
        ): (() => IOutput<Components>) => {
            // TO ANTICIPATE OVER-FITTING OPTIMIZATION
            const x: T = generator();
            const y: T = generator();
            const z: T = generator();

            const suite: benchmark.Suite = new benchmark.Suite();
            for (const key of components) {
                const props = parameters[key];
                if (props === null) continue;

                const [a, b, c] = [x, y, z].map((elem) =>
                    props instanceof Function ? elem : props.transform(elem),
                );
                const stringify: (input: T) => string | null =
                    props instanceof Function ? props : props.stringify;

                const task = () => {
                    stringify(a);
                    stringify(b);
                    stringify(c);
                };
                suite.add(key, task);
            }

            const size: number = [x, y, z]
                .map((elem) => Buffer.from(JSON.stringify(elem)).length)
                .reduce((a, b) => a + b);
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
