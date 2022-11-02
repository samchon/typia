import benchmark from "benchmark";

export namespace IsBenchmarker {
    export interface IOutput<Components extends string> {
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
            const x: T = generator();
            const y: T = generator();
            const z: T = generator();

            const suite: benchmark.Suite = new benchmark.Suite();
            for (const key of components.slice().reverse()) {
                const is = parameters[key];
                if (is !== null)
                    suite.add(key, () => {
                        is(x);
                        is(y);
                        is(z);
                    });
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
                        (elem.count / elem.times.elapsed) * 3;
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
