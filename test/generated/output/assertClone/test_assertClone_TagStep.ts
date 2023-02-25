import typia from "../../../../src";
import { TagStep } from "../../../structures/TagStep";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TagStep = _test_assertClone(
    "TagStep",
    TagStep.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TagStep.Type>> => {
            const assert = (input: any): Array<TagStep.Type> => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<TagStep.Type> => {
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
            };
            const clone = (
                input: Array<TagStep.Type>,
            ): typia.Primitive<Array<TagStep.Type>> => {
                const $co0 = (input: any): any => ({
                    exclusiveMinimum: input.exclusiveMinimum as any,
                    minimum: input.minimum as any,
                    range: input.range as any,
                    multipleOf: input.multipleOf as any,
                });
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      )
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    TagStep.SPOILERS,
);
