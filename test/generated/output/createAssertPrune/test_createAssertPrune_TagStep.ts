import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { TagStep } from "../../../structures/TagStep";

export const test_createAssertPrune_TagStep = _test_assertPrune(
    "TagStep",
    TagStep.generate,
    (input: any): TagStep => {
        const assert: any = (input: any): TagStep => {
            const __is: any = (input: any): input is TagStep => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.exclusiveMinimum &&
                    0 === (input.exclusiveMinimum % 5) - 3 &&
                    3 < input.exclusiveMinimum &&
                    "number" === typeof input.minimum &&
                    0 === (input.minimum % 5) - 3 &&
                    3 <= input.minimum &&
                    "number" === typeof input.range &&
                    0 === (input.range % 5) - 0 &&
                    0 < input.range &&
                    100 > input.range &&
                    "number" === typeof input.multipleOf &&
                    0 === input.multipleOf % 5 &&
                    3 <= input.multipleOf &&
                    99 >= input.multipleOf;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const $guard: any = (typia.createAssertPrune as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagStep => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.exclusiveMinimum &&
                            (0 === (input.exclusiveMinimum % 5) - 3 ||
                                $guard(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "number (@step 5)",
                                    value: input.exclusiveMinimum,
                                })) &&
                            (3 < input.exclusiveMinimum ||
                                $guard(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "number (@exclusiveMinimum 3)",
                                    value: input.exclusiveMinimum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "number",
                                value: input.exclusiveMinimum,
                            })) &&
                        (("number" === typeof input.minimum &&
                            (0 === (input.minimum % 5) - 3 ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number (@step 5)",
                                    value: input.minimum,
                                })) &&
                            (3 <= input.minimum ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number (@minimum 3)",
                                    value: input.minimum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number",
                                value: input.minimum,
                            })) &&
                        (("number" === typeof input.range &&
                            (0 === (input.range % 5) - 0 ||
                                $guard(_exceptionable, {
                                    path: _path + ".range",
                                    expected: "number (@step 5)",
                                    value: input.range,
                                })) &&
                            (0 < input.range ||
                                $guard(_exceptionable, {
                                    path: _path + ".range",
                                    expected: "number (@exclusiveMinimum 0)",
                                    value: input.range,
                                })) &&
                            (100 > input.range ||
                                $guard(_exceptionable, {
                                    path: _path + ".range",
                                    expected: "number (@exclusiveMaximum 100)",
                                    value: input.range,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".range",
                                expected: "number",
                                value: input.range,
                            })) &&
                        (("number" === typeof input.multipleOf &&
                            (0 === input.multipleOf % 5 ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number (@multipleOf 5)",
                                    value: input.multipleOf,
                                })) &&
                            (3 <= input.multipleOf ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number (@minimum 3)",
                                    value: input.multipleOf,
                                })) &&
                            (99 >= input.multipleOf ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number (@maximum 99)",
                                    value: input.multipleOf,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number",
                                value: input.multipleOf,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagStep",
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
        const prune: any = (input: TagStep): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
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
                (() =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    }))();
        };
        assert(input);
        prune(input);
        return input;
    },
    TagStep.SPOILERS,
);
