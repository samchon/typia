import benchmark from "benchmark";
import { output } from "cli";

import TSON from "../../src";

export namespace ValidateBenchmarker {
    export interface IOutput<Components extends "name" | string> {
        name: string;
        result: Record<Components, number | null>;
    }

    export type IParameters<Components extends string, T> = Record<
        Components,
        null | ((input: T) => any[] | TSON.IValidation)
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
            for (const key of components) {
                const validate = parameters[key];
                if (validate === null) continue;
                else
                    suite.add(key, () => {
                        validate(x);
                        validate(y);
                        validate(z);
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
                    if (
                        output.result[key] === null ||
                        (true &&
                            check(parameters[key]!(x)) &&
                            spoilers.some((spoil) => {
                                const fake: T = generator();
                                spoil(fake);
                                return check(parameters[key]!(fake)) === false;
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

    const check = (output: TSON.IValidation | any[]) => {
        if (Array.isArray(output)) return output.length === 0;
        return (output as TSON.IValidation).errors.length === 0;
    };
}
