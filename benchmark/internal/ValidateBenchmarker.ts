import benchmark from "benchmark";
import { output } from "cli";

import typia from "../../src";

export namespace ValidateBenchmarker {
    export interface IOutput<Components extends "name" | string> {
        category: string;
        result: Record<Components, number | null>;
        unit: string;
    }

    export type IParameters<Components extends string, T> = Record<
        Components,
        null | ((input: T) => any[] | typia.IValidation)
    >;

    export const prepare =
        <Components extends string>(components: Components[]) =>
        <T>(
            category: string,
            generator: () => T,
            parameters: IParameters<Components, T>,
            spoilers: Array<(input: T) => string[]>,
        ) => {
            const x: T = generator();
            const y: T = generator();
            const z: T = generator();

            const suite: benchmark.Suite = new benchmark.Suite();
            for (const key of components) {
                const validate = parameters[key];
                if (validate === null) continue;

                const task = () => {
                    validate(x);
                    validate(y);
                    validate(z);
                };
                if (key !== "class-validator" && key !== "zod")
                    new Array(100).fill("").forEach(task);
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
            for (const comp of components) output.result[comp] = null;

            return () => {
                suite.run();
                suite.map((elem: benchmark) => {
                    (output.result as any)[elem.name!] =
                        ((elem.count / elem.times.elapsed) * size) / 1_024;
                });

                for (const key of components) {
                    if (
                        output.result[key] === null ||
                        (true &&
                            check(parameters[key]!(x)) &&
                            spoilers.some((spoil) => {
                                const fake: T = generator();
                                spoil(fake);
                                return check(parameters[key]!(fake)) === false;
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

    const check = (output: typia.IValidation | any[]) => {
        if (Array.isArray(output)) return output.length === 0;
        return (output as typia.IValidation).errors.length === 0;
    };
}
