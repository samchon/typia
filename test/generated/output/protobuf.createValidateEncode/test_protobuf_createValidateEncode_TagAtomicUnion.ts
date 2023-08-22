import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_protobuf_validateEncode_TagAtomicUnion =
    _test_protobuf_validateEncode("TagAtomicUnion")<TagAtomicUnion>(
        TagAtomicUnion,
    )({
        validateEncode: (
            input: TagAtomicUnion,
        ): typia.IValidation<Uint8Array> => {
            const validate = (
                input: any,
            ): typia.IValidation<TagAtomicUnion> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagAtomicUnion => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        ("string" === typeof input.value &&
                            3 <= input.value.length &&
                            7 >= input.value.length) ||
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value) &&
                            3 <= input.value);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateEncode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagAtomicUnion => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagAtomicUnion.Type>",
                                        value: input.value,
                                    })) &&
                                    input.value
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "TagAtomicUnion.Type",
                                                        value: elem,
                                                    })) &&
                                                    $vo1(
                                                        elem,
                                                        _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "TagAtomicUnion.Type",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagAtomicUnion.Type>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("string" === typeof input.value &&
                                    (3 <= input.value.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "string (@minLength 3)",
                                            value: input.value,
                                        })) &&
                                    (7 >= input.value.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "string (@maxLength 7)",
                                            value: input.value,
                                        }))) ||
                                    ("number" === typeof input.value &&
                                        Number.isFinite(input.value) &&
                                        (3 <= input.value ||
                                            $report(_exceptionable, {
                                                path: _path + ".value",
                                                expected: "number (@minimum 3)",
                                                value: input.value,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "(number | string)",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagAtomicUnion",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagAtomicUnion",
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
            };
            const encode = (input: TagAtomicUnion): Uint8Array => {
                const $throws = (typia.protobuf.createValidateEncode as any)
                    .throws;
                const $Sizer = (typia.protobuf.createValidateEncode as any)
                    .Sizer;
                const $Writer = (typia.protobuf.createValidateEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "value";
                        if (0 !== input.value.length) {
                            for (const elem of input.value) {
                                writer.uint32(10);
                                writer.fork();
                                $peo1(elem);
                                writer.ldelim();
                            }
                        }
                    };
                    const $peo1 = (input: any): any => {
                        // property "value";
                        if ("number" === typeof input.value) {
                            writer.uint32(9);
                            writer.double(input.value);
                        } else if ("string" === typeof input.value) {
                            writer.uint32(18);
                            writer.string(input.value);
                        } else
                            $throws({
                                expected: "(number | string)",
                                value: input.value,
                            });
                    };
                    const $io1 = (input: any): boolean =>
                        ("string" === typeof input.value &&
                            3 <= input.value.length &&
                            7 >= input.value.length) ||
                        ("number" === typeof input.value && 3 <= input.value);
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            const output = validate(input) as any;
            if (output.success) output.data = encode(input);
            return output;
        },
        message:
            'syntax = "proto3";\n\nmessage TagAtomicUnion {\n    repeated TagAtomicUnion.Type value = 1;\n    message Type {\n        oneof value {\n            double v1 = 1;\n            string v2 = 2;\n        }\n    }\n}',
        decode: (input: Uint8Array): TagAtomicUnion => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: [] as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value.push($pdo1(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo1 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: "" as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = reader.double();
                            break;
                        case 2:
                            output.value = reader.string();
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
        },
    });
