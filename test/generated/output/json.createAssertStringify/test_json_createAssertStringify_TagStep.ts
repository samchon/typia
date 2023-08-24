import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { TagStep } from "../../../structures/TagStep";

export const test_json_assertStringify_TagStep = _test_json_assertStringify(
    "TagStep",
)<TagStep>(TagStep)((input: any): string => {
    const assert = (input: any): TagStep => {
        const __is = (input: any): input is TagStep => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.exclusiveMinimum &&
                Number.isFinite(input.exclusiveMinimum) &&
                0 === (input.exclusiveMinimum % 5) - 3 &&
                3 < input.exclusiveMinimum &&
                "number" === typeof input.minimum &&
                Number.isFinite(input.minimum) &&
                0 === (input.minimum % 5) - 3 &&
                3 <= input.minimum &&
                "number" === typeof input.range &&
                Number.isFinite(input.range) &&
                0 === (input.range % 5) - 0 &&
                0 < input.range &&
                100 > input.range &&
                "number" === typeof input.multipleOf &&
                Number.isFinite(input.multipleOf) &&
                0 === input.multipleOf % 5 &&
                3 <= input.multipleOf &&
                99 >= input.multipleOf;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagStep => {
                const $guard = (typia.json.createAssertStringify as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TagStep.Type>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TagStep.Type",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagStep.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagStep.Type>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.exclusiveMinimum &&
                        Number.isFinite(input.exclusiveMinimum) &&
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
                        Number.isFinite(input.minimum) &&
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
                        Number.isFinite(input.range) &&
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
                        Number.isFinite(input.multipleOf) &&
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
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagStep",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagStep",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    };
    const stringify = (input: TagStep): string => {
        const $io1 = (input: any): boolean =>
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
        const $number = (typia.json.createAssertStringify as any).number;
        const $so0 = (input: any): any =>
            `{"value":${`[${input.value
                .map(
                    (elem: any) =>
                        `{"exclusiveMinimum":${$number(
                            (elem as any).exclusiveMinimum,
                        )},"minimum":${$number(
                            (elem as any).minimum,
                        )},"range":${$number(
                            (elem as any).range,
                        )},"multipleOf":${$number((elem as any).multipleOf)}}`,
                )
                .join(",")}]`}}`;
        return $so0(input);
    };
    return stringify(assert(input));
});
