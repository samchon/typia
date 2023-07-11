import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_createRandom_TagBigInt = _test_random(
    "TagBigInt",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<TagBigInt> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value:
                (generator?.customs ?? $generator.customs)?.bigint?.([]) ??
                (generator?.bigint ?? $generator.bigint)(
                    BigInt("0"),
                    BigInt("100"),
                ),
            ranged:
                (generator?.customs ?? $generator.customs)?.bigint?.([
                    {
                        name: "minimum",
                        value: "0",
                    },
                    {
                        name: "maximum",
                        value: "100",
                    },
                ]) ??
                (generator?.bigint ?? $generator.bigint)(
                    BigInt("0"),
                    BigInt("100"),
                ),
            minimum:
                (generator?.customs ?? $generator.customs)?.bigint?.([
                    {
                        name: "minimum",
                        value: "0",
                    },
                ]) ??
                (generator?.bigint ?? $generator.bigint)(
                    BigInt("0"),
                    BigInt("10"),
                ),
            maximum:
                (generator?.customs ?? $generator.customs)?.bigint?.([
                    {
                        name: "maximum",
                        value: "100",
                    },
                ]) ??
                (generator?.bigint ?? $generator.bigint)(
                    BigInt("90"),
                    BigInt("100"),
                ),
            multipleOf:
                (generator?.customs ?? $generator.customs)?.bigint?.([
                    {
                        name: "multipleOf",
                        value: "3",
                    },
                ]) ??
                BigInt("3") *
                    (generator?.bigint ?? $generator.bigint)(
                        BigInt("0"),
                        BigInt("10"),
                    ),
        });
        return $ro0();
    },
    (input: any): typia.Primitive<TagBigInt> => {
        const __is = (input: any): input is typia.Primitive<TagBigInt> => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).value &&
                "bigint" === typeof (input as any).ranged &&
                0n <= (input as any).ranged &&
                100n >= (input as any).ranged &&
                "bigint" === typeof (input as any).minimum &&
                0n <= (input as any).minimum &&
                "bigint" === typeof (input as any).maximum &&
                100n >= (input as any).maximum &&
                "bigint" === typeof (input as any).multipleOf &&
                0n === (input as any).multipleOf % 3n
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<TagBigInt> => {
                const $guard = (typia.createAssert as any).guard;
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
