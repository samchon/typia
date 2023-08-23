import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectSimpleProtobufNullable } from "../../../structures/ObjectSimpleProtobufNullable";

export const test_random_ObjectSimpleProtobufNullable = _test_random(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ObjectSimpleProtobufNullable> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            bool: $pick([
                () => null,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            int32: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
            ])(),
            uint32: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            int64: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.bigint?.([]) ??
                    (generator?.bigint ?? $generator.bigint)(
                        BigInt(0),
                        BigInt(100),
                    ),
            ])(),
            uint64: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.bigint?.([
                        {
                            name: "type",
                            value: "uint64",
                        },
                    ]) ??
                    (generator?.bigint ?? $generator.bigint)(
                        BigInt(0),
                        BigInt(10),
                    ),
            ])(),
            float: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "float",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(0, 100),
            ])(),
            double: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            string: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            bytes: $pick([
                () => null,
                () =>
                    new Uint8Array(
                        (generator?.array ?? $generator.array)((): any =>
                            (generator?.integer ?? $generator.integer)(0, 255),
                        ),
                    ),
            ])(),
        });
        return $ro0();
    },
    assert: (input: any): ObjectSimpleProtobufNullable => {
        const __is = (input: any): input is ObjectSimpleProtobufNullable => {
            const $io0 = (input: any): boolean =>
                (null === input.bool || "boolean" === typeof input.bool) &&
                (null === input.int32 ||
                    ("number" === typeof input.int32 &&
                        Number.isFinite(input.int32) &&
                        Math.floor(input.int32) === input.int32 &&
                        -2147483648 <= input.int32 &&
                        input.int32 <= 2147483647)) &&
                (null === input.uint32 ||
                    ("number" === typeof input.uint32 &&
                        Number.isFinite(input.uint32) &&
                        Math.floor(input.uint32) === input.uint32 &&
                        0 <= input.uint32 &&
                        input.uint32 <= 4294967295)) &&
                (null === input.int64 || "bigint" === typeof input.int64) &&
                (null === input.uint64 ||
                    ("bigint" === typeof input.uint64 &&
                        BigInt(0) <= input.uint64)) &&
                (null === input.float ||
                    ("number" === typeof input.float &&
                        Number.isFinite(input.float) &&
                        -1.175494351e38 <= input.float &&
                        input.float <= 3.4028235e38)) &&
                (null === input.double ||
                    ("number" === typeof input.double &&
                        Number.isFinite(input.double))) &&
                (null === input.string || "string" === typeof input.string) &&
                (null === input.bytes || input.bytes instanceof Uint8Array);
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectSimpleProtobufNullable => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (null === input.bool ||
                        "boolean" === typeof input.bool ||
                        $guard(_exceptionable, {
                            path: _path + ".bool",
                            expected: "(boolean | null)",
                            value: input.bool,
                        })) &&
                    (null === input.int32 ||
                        ("number" === typeof input.int32 &&
                            Number.isFinite(input.int32) &&
                            (Math.floor(input.int32) === input.int32 ||
                                $guard(_exceptionable, {
                                    path: _path + ".int32",
                                    expected: "number (@type int32)",
                                    value: input.int32,
                                })) &&
                            ((-2147483648 <= input.int32 &&
                                input.int32 <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".int32",
                                    expected: "number (@type int32)",
                                    value: input.int32,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".int32",
                            expected: "(null | number)",
                            value: input.int32,
                        })) &&
                    (null === input.uint32 ||
                        ("number" === typeof input.uint32 &&
                            Number.isFinite(input.uint32) &&
                            (Math.floor(input.uint32) === input.uint32 ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint32",
                                    expected: "number (@type uint32)",
                                    value: input.uint32,
                                })) &&
                            (0 <= input.uint32 ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint32",
                                    expected: "number (@type uint32)",
                                    value: input.uint32,
                                })) &&
                            (input.uint32 <= 4294967295 ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint32",
                                    expected: "number (@type uint32)",
                                    value: input.uint32,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".uint32",
                            expected: "(null | number)",
                            value: input.uint32,
                        })) &&
                    (null === input.int64 ||
                        "bigint" === typeof input.int64 ||
                        $guard(_exceptionable, {
                            path: _path + ".int64",
                            expected: "(bigint | null)",
                            value: input.int64,
                        })) &&
                    (null === input.uint64 ||
                        ("bigint" === typeof input.uint64 &&
                            (BigInt(0) <= input.uint64 ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: "bigint (@type uint64)",
                                    value: input.uint64,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".uint64",
                            expected: "(bigint | null)",
                            value: input.uint64,
                        })) &&
                    (null === input.float ||
                        ("number" === typeof input.float &&
                            Number.isFinite(input.float) &&
                            ((-1.175494351e38 <= input.float &&
                                input.float <= 3.4028235e38) ||
                                $guard(_exceptionable, {
                                    path: _path + ".float",
                                    expected: "number (@type float)",
                                    value: input.float,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".float",
                            expected: "(null | number)",
                            value: input.float,
                        })) &&
                    (null === input.double ||
                        ("number" === typeof input.double &&
                            Number.isFinite(input.double)) ||
                        $guard(_exceptionable, {
                            path: _path + ".double",
                            expected: "(null | number)",
                            value: input.double,
                        })) &&
                    (null === input.string ||
                        "string" === typeof input.string ||
                        $guard(_exceptionable, {
                            path: _path + ".string",
                            expected: "(null | string)",
                            value: input.string,
                        })) &&
                    (null === input.bytes ||
                        input.bytes instanceof Uint8Array ||
                        $guard(_exceptionable, {
                            path: _path + ".bytes",
                            expected: "(Uint8Array | null)",
                            value: input.bytes,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectSimpleProtobufNullable",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectSimpleProtobufNullable",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
