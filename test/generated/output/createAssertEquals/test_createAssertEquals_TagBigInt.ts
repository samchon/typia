import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_assertEquals_TagBigInt = _test_assertEquals(
    "TagBigInt",
    TagBigInt.generate,
    (input: any): TagBigInt => {
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
                0n <= input.ranged &&
                100n >= input.ranged &&
                "bigint" === typeof input.minimum &&
                0n <= input.minimum &&
                "bigint" === typeof input.maximum &&
                100n >= input.maximum &&
                "bigint" === typeof input.multipleOf &&
                0n === input.multipleOf % 3n &&
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
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagBigInt => {
                const $guard = (typia.createAssertEquals as any).guard;
                const $join = (typia.createAssertEquals as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("bigint" === typeof input.value ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "bigint",
                            value: input.value,
                        })) &&
                    (("bigint" === typeof input.ranged &&
                        (0n <= input.ranged ||
                            $guard(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "bigint (@minimum 0)",
                                value: input.ranged,
                            })) &&
                        (100n >= input.ranged ||
                            $guard(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "bigint (@maximum 100)",
                                value: input.ranged,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".ranged",
                            expected: "bigint",
                            value: input.ranged,
                        })) &&
                    (("bigint" === typeof input.minimum &&
                        (0n <= input.minimum ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "bigint (@minimum 0)",
                                value: input.minimum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "bigint",
                            value: input.minimum,
                        })) &&
                    (("bigint" === typeof input.maximum &&
                        (100n >= input.maximum ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "bigint (@maximum 100)",
                                value: input.maximum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "bigint",
                            value: input.maximum,
                        })) &&
                    (("bigint" === typeof input.multipleOf &&
                        (0n === input.multipleOf % 3n ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "bigint (@multipleOf 3)",
                                value: input.multipleOf,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "bigint",
                            value: input.multipleOf,
                        })) &&
                    (5 === Object.keys(input).length ||
                        false === _exceptionable ||
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
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagBigInt",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagBigInt",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
