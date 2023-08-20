import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_assert_TagTypeBigInt = _test_assert(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    (input) =>
        ((input: any): TagTypeBigInt => {
            const __is = (input: any): input is TagTypeBigInt => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "bigint" === typeof (input as any).in64 &&
                    "bigint" === typeof (input as any).uint64 &&
                    BigInt(0) <= (input as any).uint64
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagTypeBigInt => {
                    const $guard = (typia.assert as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("bigint" === typeof input.in64 ||
                            $guard(_exceptionable, {
                                path: _path + ".in64",
                                expected: "bigint",
                                value: input.in64,
                            })) &&
                        (("bigint" === typeof input.uint64 &&
                            (BigInt(0) <= input.uint64 ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: "bigint (@type uint64)",
                                    value: input.uint64,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".uint64",
                                expected: "bigint",
                                value: input.uint64,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagTypeBigInt",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagTypeBigInt",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        })(input),
    TagTypeBigInt.SPOILERS,
);
