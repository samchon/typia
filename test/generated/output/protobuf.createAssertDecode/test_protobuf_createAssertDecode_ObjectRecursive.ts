import typia from "../../../../src";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_protobuf_assertDecode_ObjectRecursive =
    _test_protobuf_assertDecode("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )({
        assertDecode: (input: Uint8Array): ObjectRecursive => {
            const assert = (input: any): ObjectRecursive => {
                const __is = (input: any): input is ObjectRecursive => {
                    const $io0 = (input: any): boolean =>
                        (null === input.parent ||
                            ("object" === typeof input.parent &&
                                null !== input.parent &&
                                $io0(input.parent))) &&
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.code &&
                        "string" === typeof input.name &&
                        "number" === typeof input.sequence &&
                        Number.isFinite(input.sequence) &&
                        "object" === typeof input.created_at &&
                        null !== input.created_at &&
                        "number" === typeof (input.created_at as any).time &&
                        Number.isFinite((input.created_at as any).time) &&
                        "number" === typeof (input.created_at as any).zone &&
                        Number.isFinite((input.created_at as any).zone);
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
                    ): input is ObjectRecursive => {
                        const $guard = (
                            typia.protobuf.createAssertDecode as any
                        ).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (null === input.parent ||
                                ((("object" === typeof input.parent &&
                                    null !== input.parent) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".parent",
                                        expected:
                                            "(ObjectRecursive.IDepartment | null)",
                                        value: input.parent,
                                    })) &&
                                    $ao0(
                                        input.parent,
                                        _path + ".parent",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".parent",
                                    expected:
                                        "(ObjectRecursive.IDepartment | null)",
                                    value: input.parent,
                                })) &&
                            (("number" === typeof input.id &&
                                Number.isFinite(input.id)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "number",
                                    value: input.id,
                                })) &&
                            ("string" === typeof input.code ||
                                $guard(_exceptionable, {
                                    path: _path + ".code",
                                    expected: "string",
                                    value: input.code,
                                })) &&
                            ("string" === typeof input.name ||
                                $guard(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                })) &&
                            (("number" === typeof input.sequence &&
                                Number.isFinite(input.sequence)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".sequence",
                                    expected: "number",
                                    value: input.sequence,
                                })) &&
                            (((("object" === typeof input.created_at &&
                                null !== input.created_at) ||
                                $guard(_exceptionable, {
                                    path: _path + ".created_at",
                                    expected: "ObjectRecursive.ITimestamp",
                                    value: input.created_at,
                                })) &&
                                $ao1(
                                    input.created_at,
                                    _path + ".created_at",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".created_at",
                                    expected: "ObjectRecursive.ITimestamp",
                                    value: input.created_at,
                                }));
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("number" === typeof input.time &&
                                Number.isFinite(input.time)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".time",
                                    expected: "number",
                                    value: input.time,
                                })) &&
                            (("number" === typeof input.zone &&
                                Number.isFinite(input.zone)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".zone",
                                    expected: "number",
                                    value: input.zone,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectRecursive.IDepartment",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectRecursive.IDepartment",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const decode = (input: Uint8Array): ObjectRecursive => {
                const $Reader = (typia.protobuf.createAssertDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        parent: null as any,
                        id: undefined as any,
                        code: "" as any,
                        name: "" as any,
                        sequence: undefined as any,
                        created_at: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.parent = $pdo0(reader, reader.uint32());
                                break;
                            case 2:
                                output.id = reader.double();
                                break;
                            case 3:
                                output.code = reader.string();
                                break;
                            case 4:
                                output.name = reader.string();
                                break;
                            case 5:
                                output.sequence = reader.double();
                                break;
                            case 6:
                                output.created_at = $pdo1(
                                    reader,
                                    reader.uint32(),
                                );
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo1 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        time: undefined as any,
                        zone: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.time = reader.double();
                                break;
                            case 2:
                                output.zone = reader.double();
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
            assert(input);
            const output = decode(input);
            return output;
        },
        encode: (input: ObjectRecursive): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "parent";
                    if (null != input.parent) {
                        writer.uint32(10);
                        writer.fork();
                        $peo0(input.parent);
                        writer.ldelim();
                    }
                    // property "id";
                    writer.uint32(17);
                    writer.double(input.id);
                    // property "code";
                    writer.uint32(26);
                    writer.string(input.code);
                    // property "name";
                    writer.uint32(34);
                    writer.string(input.name);
                    // property "sequence";
                    writer.uint32(41);
                    writer.double(input.sequence);
                    // property "created_at";
                    writer.uint32(50);
                    writer.fork();
                    $peo1(input.created_at);
                    writer.ldelim();
                };
                const $peo1 = (input: any): any => {
                    // property "time";
                    writer.uint32(9);
                    writer.double(input.time);
                    // property "zone";
                    writer.uint32(17);
                    writer.double(input.zone);
                };
                const $io0 = (input: any): boolean =>
                    (null === input.parent ||
                        ("object" === typeof input.parent &&
                            null !== input.parent &&
                            $io0(input.parent))) &&
                    "number" === typeof input.id &&
                    "string" === typeof input.code &&
                    "string" === typeof input.name &&
                    "number" === typeof input.sequence &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    $io1(input.created_at);
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.time &&
                    "number" === typeof input.zone;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
