import typia from "../../../../src";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";

export const test_createAssertGuard_TypeTagBigInt = _test_assertGuard(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)(
    (input: any): asserts input is TypeTagBigInt => {
        const __is = (input: any): input is TypeTagBigInt => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).value &&
                "bigint" === typeof (input as any).ranged &&
                BigInt(0) <= (input as any).ranged &&
                (input as any).ranged <= BigInt(100) &&
                "bigint" === typeof (input as any).minimum &&
                BigInt(0) <= (input as any).minimum &&
                "bigint" === typeof (input as any).maximum &&
                (input as any).maximum <= BigInt(100) &&
                "bigint" === typeof (input as any).multipleOf &&
                (input as any).multipleOf % BigInt(3) === BigInt(0)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TypeTagBigInt => {
                const $guard = (typia.createAssertGuard as any).guard;
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
                                expected: "bigint & Minimum<0n>",
                                value: input.ranged,
                            })) &&
                        (input.ranged <= BigInt(100) ||
                            $guard(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "bigint & Maximum<100n>",
                                value: input.ranged,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".ranged",
                            expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                            value: input.ranged,
                        })) &&
                    (("bigint" === typeof input.minimum &&
                        (BigInt(0) <= input.minimum ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "bigint & Minimum<0n>",
                                value: input.minimum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "(bigint & Minimum<0n>)",
                            value: input.minimum,
                        })) &&
                    (("bigint" === typeof input.maximum &&
                        (input.maximum <= BigInt(100) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "bigint & Maximum<100n>",
                                value: input.maximum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "(bigint & Maximum<100n>)",
                            value: input.maximum,
                        })) &&
                    (("bigint" === typeof input.multipleOf &&
                        (input.multipleOf % BigInt(3) === BigInt(0) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "bigint & MultipleOf<3n>",
                                value: input.multipleOf,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "(bigint & MultipleOf<3n>)",
                            value: input.multipleOf,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TypeTagBigInt",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TypeTagBigInt",
                        value: input,
                    })
                );
            })(input, "$input", true);
    },
);
