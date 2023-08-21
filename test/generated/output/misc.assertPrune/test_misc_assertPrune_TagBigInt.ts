import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_misc_assertPrune_TagBigInt = _test_misc_assertPrune(
    "TagBigInt",
)<TagBigInt>(TagBigInt)((input) =>
    ((input: any): TagBigInt => {
        const assert = (input: any): TagBigInt => {
            const __is = (input: any): input is TagBigInt => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "bigint" === typeof (input as any).value &&
                    "bigint" === typeof (input as any).ranged &&
                    BigInt(0) <= (input as any).ranged &&
                    BigInt(100) >= (input as any).ranged &&
                    "bigint" === typeof (input as any).minimum &&
                    BigInt(0) <= (input as any).minimum &&
                    "bigint" === typeof (input as any).maximum &&
                    BigInt(100) >= (input as any).maximum &&
                    "bigint" === typeof (input as any).multipleOf &&
                    BigInt(0) === (input as any).multipleOf % BigInt(3)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagBigInt => {
                    const $guard = (typia.misc.assertPrune as any).guard;
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
                            (BigInt(0) <= input.ranged ||
                                $guard(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "bigint (@minimum 0)",
                                    value: input.ranged,
                                })) &&
                            (BigInt(100) >= input.ranged ||
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
                            (BigInt(0) <= input.minimum ||
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
                            (BigInt(100) >= input.maximum ||
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
                            (BigInt(0) === input.multipleOf % BigInt(3) ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "bigint (@multipleOf 3)",
                                    value: input.multipleOf,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "bigint",
                                value: input.multipleOf,
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
        };
        const prune = (input: TagBigInt): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "value" === key ||
                        "ranged" === key ||
                        "minimum" === key ||
                        "maximum" === key ||
                        "multipleOf" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
    })(input),
);
