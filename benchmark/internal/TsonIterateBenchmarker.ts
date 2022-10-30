import Benchmark from "benchmark";

import TSON from "../../src";

export namespace TsonIterateBenchmarker {
    export interface IOutput {
        name: string;
        result: {
            is: number;
            assert: number;
            validate: number;
        };
    }
    export interface IParameters<T> {
        is: (input: T) => boolean;
        assert: (input: T) => T;
        validate: (input: T) => TSON.IValidation;
    }

    export function prepare<T>(
        name: string,
        generator: () => T,
        parameters: IParameters<T>,
    ): () => IOutput {
        const data: T = generator();

        const suite: Benchmark.Suite = new Benchmark.Suite();
        suite.add("is", () => parameters.is(data));
        suite.add("assert", () => parameters.assert(data));
        suite.add("validate", () => parameters.validate(data));

        const output: IOutput = {
            name,
            result: {
                is: 0,
                assert: 0,
                validate: 0,
            },
        };
        return () => {
            suite.run();
            suite.map((elem: Benchmark) => {
                (output.result as any)[elem.name!] =
                    elem.count / elem.times.elapsed;
            });
            return output;
        };
    }
}
