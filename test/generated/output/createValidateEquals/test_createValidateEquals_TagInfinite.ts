import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TagInfinite } from "../../../structures/TagInfinite";

export const test_validateEquals_TagInfinite = _test_validateEquals(
    "TagInfinite",
)<TagInfinite>(TagInfinite)((input: any): typia.IValidation<TagInfinite> => {
    const errors = [] as any[];
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is TagInfinite => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            "number" === typeof input.ranged &&
            Number.isFinite(input.ranged) &&
            0 <= input.ranged &&
            100 >= input.ranged &&
            "number" === typeof input.minimum &&
            Number.isFinite(input.minimum) &&
            0 <= input.minimum &&
            "number" === typeof input.maximum &&
            Number.isFinite(input.maximum) &&
            100 >= input.maximum &&
            "number" === typeof input.multipleOf &&
            Number.isFinite(input.multipleOf) &&
            0 === input.multipleOf % 3 &&
            "number" === typeof input.typed &&
            Number.isFinite(input.typed) &&
            Math.floor(input.typed) === input.typed &&
            -2147483648 <= input.typed &&
            input.typed <= 2147483647 &&
            (6 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "value",
                            "ranged",
                            "minimum",
                            "maximum",
                            "multipleOf",
                            "typed",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input)) {
        const $report = (typia.createValidateEquals as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagInfinite => {
            const $join = (typia.createValidateEquals as any).join;
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }),
                    ("number" === typeof input.ranged &&
                        Number.isFinite(input.ranged) &&
                        (0 <= input.ranged ||
                            $report(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "number (@minimum 0)",
                                value: input.ranged,
                            })) &&
                        (100 >= input.ranged ||
                            $report(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "number (@maximum 100)",
                                value: input.ranged,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".ranged",
                            expected: "number",
                            value: input.ranged,
                        }),
                    ("number" === typeof input.minimum &&
                        Number.isFinite(input.minimum) &&
                        (0 <= input.minimum ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number (@minimum 0)",
                                value: input.minimum,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "number",
                            value: input.minimum,
                        }),
                    ("number" === typeof input.maximum &&
                        Number.isFinite(input.maximum) &&
                        (100 >= input.maximum ||
                            $report(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "number (@maximum 100)",
                                value: input.maximum,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "number",
                            value: input.maximum,
                        }),
                    ("number" === typeof input.multipleOf &&
                        Number.isFinite(input.multipleOf) &&
                        (0 === input.multipleOf % 3 ||
                            $report(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number (@multipleOf 3)",
                                value: input.multipleOf,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "number",
                            value: input.multipleOf,
                        }),
                    ("number" === typeof input.typed &&
                        Number.isFinite(input.typed) &&
                        (Math.floor(input.typed) === input.typed ||
                            $report(_exceptionable, {
                                path: _path + ".typed",
                                expected: "number (@type int)",
                                value: input.typed,
                            })) &&
                        ((-2147483648 <= input.typed &&
                            input.typed <= 2147483647) ||
                            $report(_exceptionable, {
                                path: _path + ".typed",
                                expected: "number (@type int)",
                                value: input.typed,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".typed",
                            expected: "number",
                            value: input.typed,
                        }),
                    6 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key: any) => {
                                if (
                                    [
                                        "value",
                                        "ranged",
                                        "minimum",
                                        "maximum",
                                        "multipleOf",
                                        "typed",
                                    ].some((prop: any) => key === prop)
                                )
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input && null !== input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagInfinite",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "TagInfinite",
                    value: input,
                })
            );
        })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined,
    } as any;
});
