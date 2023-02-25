import typia from "../../../../src";
import { TagStep } from "../../../structures/TagStep";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagStep = _test_assertPrune(
    "TagStep",
    TagStep.generate,
    (input) =>
        ((input: any): Array<TagStep.Type> => {
            const assert = (input: any): Array<TagStep.Type> => {
                const $guard = (typia.assertPrune as any).guard;
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
            const prune = (input: Array<TagStep.Type>): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "exclusiveMinimum" === key ||
                            "minimum" === key ||
                            "range" === key ||
                            "multipleOf" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    TagStep.SPOILERS,
);
