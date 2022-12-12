import benchmark from "benchmark";

export namespace IsBenchmarker {
    export interface IOutput<Components extends string> {
        category: string;
        result: Record<Components, number | null>;
        unit: string;
    }
    export type IParameters<Components extends string, T> = Record<
        Components,
        null | ((input: T) => boolean)
    >;

    export const prepare =
        <Components extends string>(components: Components[]) =>
        <T>(
            category: string,
            generator: () => T,
            parameters: IParameters<Components, T>,
            spoilers: Array<(input: T) => string[]>,
        ) => {
            // TO ANTICIPATE OVER-FITTING OPTIMIZATION
            // BY typia AND TYPEBOX
            const a: T = generator();
            const b: T = generator();
            const c: T = generator();
            const d: T = generator();

            const suite: benchmark.Suite = new benchmark.Suite();
            for (const key of components.slice().reverse()) {
                const is = parameters[key];
                if (is !== null)
                    suite.add(key, () => {
                        is(a);
                        is(b);
                        is(c);
                        is(d);
                    });
            }

            const size: number = [a, b, c, d]
                .map((elem) => Buffer.from(JSON.stringify(elem)).length)
                .reduce((a, b) => a + b);
            const output: IOutput<Components> = {
                category: category,
                result: {} as any,
                unit: "kilobytes/sec",
            };
            for (const comp of components) output.result[comp] = null;
            return () => {
                suite.run();
                suite.map((elem: benchmark) => {
                    (output.result as any)[elem.name!] =
                        ((elem.count / elem.times.elapsed) * size) / 1_024;
                });

                for (const key of components) {
                    const is = parameters[key]!;
                    if (
                        output.result[key] === null ||
                        (true &&
                            is(generator()) &&
                            spoilers.every((spoil) => {
                                const fake: T = generator();
                                spoil(fake);
                                return is(fake) === false;
                            })) ||
                        (key === "class-validator" &&
                            category.indexOf("implicit") === -1 &&
                            category.indexOf("ultimate") === -1)
                    )
                        continue;
                    output.result[key] = null;
                }
                return output;
            };
        };
}
