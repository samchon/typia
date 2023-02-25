import typia from "../../../../src";
import { TagStep } from "../../../structures/TagStep";
import { _test_random } from "../internal/_test_random";

export const test_random_TagStep = _test_random(
    "TagStep",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<TagStep> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                exclusiveMinimum:
                    3 + 5 * (generator.integer ?? $generator.integer)(1, 10),
                minimum:
                    3 + 5 * (generator.integer ?? $generator.integer)(0, 10),
                range: 0 + 5 * (generator.integer ?? $generator.integer)(1, 19),
                multipleOf:
                    5 * (generator.integer ?? $generator.integer)(1, 19),
            });
            return (generator.array ?? $generator.array)(() => $ro0());
        })(),
    (input: any): TagStep => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagStep => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.exclusiveMinimum &&
                    0 === (input.exclusiveMinimum % 5) - 3 &&
                    3 < input.exclusiveMinimum) ||
                    $guard(_exceptionable, {
                        path: _path + ".exclusiveMinimum",
                        expected: "number",
                        value: input.exclusiveMinimum,
                    })) &&
                (("number" === typeof input.minimum &&
                    0 === (input.minimum % 5) - 3 &&
                    3 <= input.minimum) ||
                    $guard(_exceptionable, {
                        path: _path + ".minimum",
                        expected: "number",
                        value: input.minimum,
                    })) &&
                (("number" === typeof input.range &&
                    0 === (input.range % 5) - 0 &&
                    0 < input.range &&
                    100 > input.range) ||
                    $guard(_exceptionable, {
                        path: _path + ".range",
                        expected: "number",
                        value: input.range,
                    })) &&
                (("number" === typeof input.multipleOf &&
                    0 === input.multipleOf % 5 &&
                    3 <= input.multipleOf &&
                    99 >= input.multipleOf) ||
                    $guard(_exceptionable, {
                        path: _path + ".multipleOf",
                        expected: "number",
                        value: input.multipleOf,
                    }));
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TagStep.Type>>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "Resolve<TagStep.Type>",
                                value: elem,
                            })) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
