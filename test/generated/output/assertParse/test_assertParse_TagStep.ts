import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { TagStep } from "../../../structures/TagStep";

export const test_assertParse_TagStep = _test_assertParse(
    "TagStep",
    TagStep.generate,
    (input) =>
        ((input: string): typia.Primitive<TagStep> => {
            const assert = (input: any): TagStep => {
                const $guard = (typia.assertParse as any).guard;
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
                                expected: "Array<TagStep.Type>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagStep.Type",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input);
        })(input),
    TagStep.SPOILERS,
);
