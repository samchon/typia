import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_validateEquals_TagBigInt = _test_validateEquals(
    "TagBigInt",
)<TagBigInt>(TagBigInt)((input) =>
    ((input: any): typia.IValidation<TagBigInt> => {
        const errors = [] as any[];
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is TagBigInt => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "bigint" === typeof input.value &&
                "bigint" === typeof input.ranged &&
                BigInt(0) <= input.ranged &&
                BigInt(100) >= input.ranged &&
                "bigint" === typeof input.minimum &&
                BigInt(0) <= input.minimum &&
                "bigint" === typeof input.maximum &&
                BigInt(100) >= input.maximum &&
                "bigint" === typeof input.multipleOf &&
                BigInt(0) === input.multipleOf % BigInt(3) &&
                (5 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "value",
                                "ranged",
                                "minimum",
                                "maximum",
                                "multipleOf",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        if (false === __is(input)) {
            const $report = (typia.validateEquals as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagBigInt => {
                const $join = (typia.validateEquals as any).join;
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "bigint" === typeof input.value ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "bigint",
                                value: input.value,
                            }),
                        ("bigint" === typeof input.ranged &&
                            (BigInt(0) <= input.ranged ||
                                $report(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "bigint (@minimum 0)",
                                    value: input.ranged,
                                })) &&
                            (BigInt(100) >= input.ranged ||
                                $report(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "bigint (@maximum 100)",
                                    value: input.ranged,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "bigint",
                                value: input.ranged,
                            }),
                        ("bigint" === typeof input.minimum &&
                            (BigInt(0) <= input.minimum ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "bigint (@minimum 0)",
                                    value: input.minimum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "bigint",
                                value: input.minimum,
                            }),
                        ("bigint" === typeof input.maximum &&
                            (BigInt(100) >= input.maximum ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "bigint (@maximum 100)",
                                    value: input.maximum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "bigint",
                                value: input.maximum,
                            }),
                        ("bigint" === typeof input.multipleOf &&
                            (BigInt(0) === input.multipleOf % BigInt(3) ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "bigint (@multipleOf 3)",
                                    value: input.multipleOf,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "bigint",
                                value: input.multipleOf,
                            }),
                        5 === Object.keys(input).length ||
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
                            expected: "TagBigInt",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagBigInt",
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
    })(input),
);
