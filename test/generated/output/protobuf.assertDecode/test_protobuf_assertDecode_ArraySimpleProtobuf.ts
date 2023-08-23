import typia from "../../../../src";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobuf } from "../../../structures/ArraySimpleProtobuf";

export const test_protobuf_assertDecode_ArraySimpleProtobuf =
    _test_protobuf_assertDecode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf,
    )({
        assertDecode: (input) =>
            ((input: Uint8Array): ArraySimpleProtobuf => {
                const decode = (input: Uint8Array): ArraySimpleProtobuf => {
                    const $Reader = (typia.protobuf.assertDecode as any).Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            boolean: [] as any,
                            int32: [] as any,
                            uint32: [] as any,
                            int64: [] as any,
                            uint64: [] as any,
                            float: [] as any,
                            double: [] as any,
                            string: [] as any,
                            bytes: [] as any,
                            object: [] as any,
                        };
                        while (reader.index() < length) {
                            const tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    // type: Array<boolean>;
                                    if (2 === (tag & 7)) {
                                        const piece =
                                            reader.uint32() + reader.index();
                                        while (reader.index() < piece)
                                            output.boolean.push(reader.bool());
                                    } else output.boolean.push(reader.bool());
                                    break;
                                case 2:
                                    // type: Array<number>;
                                    if (2 === (tag & 7)) {
                                        const piece =
                                            reader.uint32() + reader.index();
                                        while (reader.index() < piece)
                                            output.int32.push(reader.int32());
                                    } else output.int32.push(reader.int32());
                                    break;
                                case 3:
                                    // type: Array<number>;
                                    if (2 === (tag & 7)) {
                                        const piece =
                                            reader.uint32() + reader.index();
                                        while (reader.index() < piece)
                                            output.uint32.push(reader.uint32());
                                    } else output.uint32.push(reader.uint32());
                                    break;
                                case 4:
                                    // type: Array<bigint>;
                                    if (2 === (tag & 7)) {
                                        const piece =
                                            reader.uint32() + reader.index();
                                        while (reader.index() < piece)
                                            output.int64.push(reader.int64());
                                    } else output.int64.push(reader.int64());
                                    break;
                                case 5:
                                    // type: Array<bigint>;
                                    if (2 === (tag & 7)) {
                                        const piece =
                                            reader.uint32() + reader.index();
                                        while (reader.index() < piece)
                                            output.uint64.push(reader.uint64());
                                    } else output.uint64.push(reader.uint64());
                                    break;
                                case 6:
                                    // type: Array<number>;
                                    if (2 === (tag & 7)) {
                                        const piece =
                                            reader.uint32() + reader.index();
                                        while (reader.index() < piece)
                                            output.float.push(reader.float());
                                    } else output.float.push(reader.float());
                                    break;
                                case 7:
                                    // type: Array<number>;
                                    if (2 === (tag & 7)) {
                                        const piece =
                                            reader.uint32() + reader.index();
                                        while (reader.index() < piece)
                                            output.double.push(reader.double());
                                    } else output.double.push(reader.double());
                                    break;
                                case 8:
                                    // type: Array<string>;
                                    output.string.push(reader.string());
                                    break;
                                case 9:
                                    // type: Array<Uint8Array>;
                                    output.bytes.push(reader.bytes());
                                    break;
                                case 10:
                                    // type: Array<ArraySimpleProtobuf>;
                                    output.object.push(
                                        $pdo0(reader, reader.uint32()),
                                    );
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                            }
                        }
                        return output;
                    };
                    const reader = new $Reader(input);
                    return $pdo0(reader);
                };
                const assert = (input: any): ArraySimpleProtobuf => {
                    const __is = (input: any): input is ArraySimpleProtobuf => {
                        const $io0 = (input: any): boolean =>
                            Array.isArray(input.boolean) &&
                            input.boolean.every(
                                (elem: any) => "boolean" === typeof elem,
                            ) &&
                            Array.isArray(input.int32) &&
                            input.int32.every(
                                (elem: any) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem) &&
                                    Math.floor(elem) === elem &&
                                    -2147483648 <= elem &&
                                    elem <= 2147483647,
                            ) &&
                            Array.isArray(input.uint32) &&
                            input.uint32.every(
                                (elem: any) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem) &&
                                    Math.floor(elem) === elem &&
                                    0 <= elem &&
                                    elem <= 4294967295,
                            ) &&
                            Array.isArray(input.int64) &&
                            input.int64.every(
                                (elem: any) => "bigint" === typeof elem,
                            ) &&
                            Array.isArray(input.uint64) &&
                            input.uint64.every(
                                (elem: any) =>
                                    "bigint" === typeof elem &&
                                    BigInt(0) <= elem,
                            ) &&
                            Array.isArray(input.float) &&
                            input.float.every(
                                (elem: any) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem) &&
                                    -1.175494351e38 <= elem &&
                                    elem <= 3.4028235e38,
                            ) &&
                            Array.isArray(input.double) &&
                            input.double.every(
                                (elem: any) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem),
                            ) &&
                            Array.isArray(input.string) &&
                            input.string.every(
                                (elem: any) => "string" === typeof elem,
                            ) &&
                            Array.isArray(input.bytes) &&
                            input.bytes.every(
                                (elem: any) => elem instanceof Uint8Array,
                            ) &&
                            Array.isArray(input.object) &&
                            input.object.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            );
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ArraySimpleProtobuf => {
                            const $guard = (typia.protobuf.assertDecode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (((Array.isArray(input.boolean) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".boolean",
                                        expected: "Array<boolean>",
                                        value: input.boolean,
                                    })) &&
                                    input.boolean.every(
                                        (elem: any, _index1: number) =>
                                            "boolean" === typeof elem ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean[" +
                                                    _index1 +
                                                    "]",
                                                expected: "boolean",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".boolean",
                                        expected: "Array<boolean>",
                                        value: input.boolean,
                                    })) &&
                                (((Array.isArray(input.int32) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int32",
                                        expected: "Array<number>",
                                        value: input.int32,
                                    })) &&
                                    input.int32.every(
                                        (elem: any, _index2: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem) &&
                                                (Math.floor(elem) === elem ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".int32[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "number (@type int32)",
                                                        value: elem,
                                                    })) &&
                                                ((-2147483648 <= elem &&
                                                    elem <= 2147483647) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".int32[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "number (@type int32)",
                                                        value: elem,
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".int32[" +
                                                    _index2 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int32",
                                        expected: "Array<number>",
                                        value: input.int32,
                                    })) &&
                                (((Array.isArray(input.uint32) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint32",
                                        expected: "Array<number>",
                                        value: input.uint32,
                                    })) &&
                                    input.uint32.every(
                                        (elem: any, _index3: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem) &&
                                                (Math.floor(elem) === elem ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".uint32[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "number (@type uint32)",
                                                        value: elem,
                                                    })) &&
                                                (0 <= elem ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".uint32[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "number (@type uint32)",
                                                        value: elem,
                                                    })) &&
                                                (elem <= 4294967295 ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".uint32[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "number (@type uint32)",
                                                        value: elem,
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".uint32[" +
                                                    _index3 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint32",
                                        expected: "Array<number>",
                                        value: input.uint32,
                                    })) &&
                                (((Array.isArray(input.int64) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int64",
                                        expected: "Array<bigint>",
                                        value: input.int64,
                                    })) &&
                                    input.int64.every(
                                        (elem: any, _index4: number) =>
                                            "bigint" === typeof elem ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".int64[" +
                                                    _index4 +
                                                    "]",
                                                expected: "bigint",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int64",
                                        expected: "Array<bigint>",
                                        value: input.int64,
                                    })) &&
                                (((Array.isArray(input.uint64) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: "Array<bigint>",
                                        value: input.uint64,
                                    })) &&
                                    input.uint64.every(
                                        (elem: any, _index5: number) =>
                                            ("bigint" === typeof elem &&
                                                (BigInt(0) <= elem ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".uint64[" +
                                                            _index5 +
                                                            "]",
                                                        expected:
                                                            "bigint (@type uint64)",
                                                        value: elem,
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".uint64[" +
                                                    _index5 +
                                                    "]",
                                                expected: "bigint",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: "Array<bigint>",
                                        value: input.uint64,
                                    })) &&
                                (((Array.isArray(input.float) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".float",
                                        expected: "Array<number>",
                                        value: input.float,
                                    })) &&
                                    input.float.every(
                                        (elem: any, _index6: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem) &&
                                                ((-1.175494351e38 <= elem &&
                                                    elem <= 3.4028235e38) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".float[" +
                                                            _index6 +
                                                            "]",
                                                        expected:
                                                            "number (@type float)",
                                                        value: elem,
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".float[" +
                                                    _index6 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".float",
                                        expected: "Array<number>",
                                        value: input.float,
                                    })) &&
                                (((Array.isArray(input.double) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".double",
                                        expected: "Array<number>",
                                        value: input.double,
                                    })) &&
                                    input.double.every(
                                        (elem: any, _index7: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem)) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".double[" +
                                                    _index7 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".double",
                                        expected: "Array<number>",
                                        value: input.double,
                                    })) &&
                                (((Array.isArray(input.string) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".string",
                                        expected: "Array<string>",
                                        value: input.string,
                                    })) &&
                                    input.string.every(
                                        (elem: any, _index8: number) =>
                                            "string" === typeof elem ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".string[" +
                                                    _index8 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".string",
                                        expected: "Array<string>",
                                        value: input.string,
                                    })) &&
                                (((Array.isArray(input.bytes) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".bytes",
                                        expected: "Array<Uint8Array>",
                                        value: input.bytes,
                                    })) &&
                                    input.bytes.every(
                                        (elem: any, _index9: number) =>
                                            elem instanceof Uint8Array ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".bytes[" +
                                                    _index9 +
                                                    "]",
                                                expected: "Uint8Array",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".bytes",
                                        expected: "Array<Uint8Array>",
                                        value: input.bytes,
                                    })) &&
                                (((Array.isArray(input.object) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".object",
                                        expected: "Array<ArraySimpleProtobuf>",
                                        value: input.object,
                                    })) &&
                                    input.object.every(
                                        (elem: any, _index10: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".object[" +
                                                        _index10 +
                                                        "]",
                                                    expected:
                                                        "ArraySimpleProtobuf",
                                                    value: elem,
                                                })) &&
                                                $ao0(
                                                    elem,
                                                    _path +
                                                        ".object[" +
                                                        _index10 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".object[" +
                                                    _index10 +
                                                    "]",
                                                expected: "ArraySimpleProtobuf",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".object",
                                        expected: "Array<ArraySimpleProtobuf>",
                                        value: input.object,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ArraySimpleProtobuf",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ArraySimpleProtobuf",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const output = decode(input);
                return assert(output);
            })(input),
        encode: (input: ArraySimpleProtobuf): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "boolean";
                    if (0 !== input.boolean.length) {
                        writer.uint32(10);
                        writer.fork();
                        for (const elem of input.boolean) {
                            writer.bool(elem);
                        }
                        writer.ldelim();
                    }
                    // property "int32";
                    if (0 !== input.int32.length) {
                        writer.uint32(18);
                        writer.fork();
                        for (const elem of input.int32) {
                            writer.int32(elem);
                        }
                        writer.ldelim();
                    }
                    // property "uint32";
                    if (0 !== input.uint32.length) {
                        writer.uint32(26);
                        writer.fork();
                        for (const elem of input.uint32) {
                            writer.uint32(elem);
                        }
                        writer.ldelim();
                    }
                    // property "int64";
                    if (0 !== input.int64.length) {
                        writer.uint32(34);
                        writer.fork();
                        for (const elem of input.int64) {
                            writer.int64(elem);
                        }
                        writer.ldelim();
                    }
                    // property "uint64";
                    if (0 !== input.uint64.length) {
                        writer.uint32(42);
                        writer.fork();
                        for (const elem of input.uint64) {
                            writer.uint64(elem);
                        }
                        writer.ldelim();
                    }
                    // property "float";
                    if (0 !== input.float.length) {
                        writer.uint32(50);
                        writer.fork();
                        for (const elem of input.float) {
                            writer.float(elem);
                        }
                        writer.ldelim();
                    }
                    // property "double";
                    if (0 !== input.double.length) {
                        writer.uint32(58);
                        writer.fork();
                        for (const elem of input.double) {
                            writer.double(elem);
                        }
                        writer.ldelim();
                    }
                    // property "string";
                    if (0 !== input.string.length) {
                        for (const elem of input.string) {
                            writer.uint32(66);
                            writer.string(elem);
                        }
                    }
                    // property "bytes";
                    if (0 !== input.bytes.length) {
                        for (const elem of input.bytes) {
                            writer.uint32(74);
                            writer.bytes(elem);
                        }
                    }
                    // property "object";
                    if (0 !== input.object.length) {
                        for (const elem of input.object) {
                            // 10 -> ArraySimpleProtobuf;
                            writer.uint32(82);
                            writer.fork();
                            $peo0(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.boolean) &&
                    input.boolean.every(
                        (elem: any) => "boolean" === typeof elem,
                    ) &&
                    Array.isArray(input.int32) &&
                    input.int32.every(
                        (elem: any) =>
                            "number" === typeof elem &&
                            Math.floor(elem) === elem &&
                            -2147483648 <= elem &&
                            elem <= 2147483647,
                    ) &&
                    Array.isArray(input.uint32) &&
                    input.uint32.every(
                        (elem: any) =>
                            "number" === typeof elem &&
                            Math.floor(elem) === elem &&
                            0 <= elem &&
                            elem <= 4294967295,
                    ) &&
                    Array.isArray(input.int64) &&
                    input.int64.every(
                        (elem: any) => "bigint" === typeof elem,
                    ) &&
                    Array.isArray(input.uint64) &&
                    input.uint64.every(
                        (elem: any) =>
                            "bigint" === typeof elem && BigInt(0) <= elem,
                    ) &&
                    Array.isArray(input.float) &&
                    input.float.every(
                        (elem: any) =>
                            "number" === typeof elem &&
                            -1.175494351e38 <= elem &&
                            elem <= 3.4028235e38,
                    ) &&
                    Array.isArray(input.double) &&
                    input.double.every(
                        (elem: any) => "number" === typeof elem,
                    ) &&
                    Array.isArray(input.string) &&
                    input.string.every(
                        (elem: any) => "string" === typeof elem,
                    ) &&
                    Array.isArray(input.bytes) &&
                    input.bytes.every(
                        (elem: any) => elem instanceof Uint8Array,
                    ) &&
                    Array.isArray(input.object) &&
                    input.object.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    );
                //ArraySimpleProtobuf;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
