import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { TagArray } from "../../../structures/TagArray";

export const test_protobuf_validateDecode_TagArray =
    _test_protobuf_validateDecode("TagArray")<TagArray>(TagArray)({
        validateDecode: (input: Uint8Array): typia.IValidation<TagArray> => {
            const validate = (input: any): typia.IValidation<TagArray> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagArray => {
                    const $is_uuid = (
                        typia.protobuf.createValidateDecode as any
                    ).is_uuid;
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        Array.isArray(input.items) &&
                        3 === input.items.length &&
                        input.items.every(
                            (elem: any) =>
                                "string" === typeof elem && $is_uuid(elem),
                        ) &&
                        Array.isArray(input.minItems) &&
                        3 <= input.minItems.length &&
                        input.minItems.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem) &&
                                3 <= elem,
                        ) &&
                        Array.isArray(input.both) &&
                        3 <= input.both.length &&
                        7 >= input.both.length &&
                        input.both.every(
                            (elem: any) =>
                                "string" === typeof elem && $is_uuid(elem),
                        ) &&
                        Array.isArray(input.equal) &&
                        10 <= input.equal.length &&
                        10 >= input.equal.length &&
                        input.equal.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                10 <= elem &&
                                10 >= elem,
                        );
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateDecode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagArray => {
                        const $is_uuid = (
                            typia.protobuf.createValidateDecode as any
                        ).is_uuid;
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagArray.Type>",
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
                                                            "TagArray.Type",
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
                                                    expected: "TagArray.Type",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagArray.Type>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                (((Array.isArray(input.items) &&
                                    (3 === input.items.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".items",
                                            expected: "Array.length (@items 3)",
                                            value: input.items,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<string>",
                                        value: input.items,
                                    })) &&
                                    input.items
                                        .map(
                                            (elem: any, _index2: number) =>
                                                ("string" === typeof elem &&
                                                    ($is_uuid(elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".items[" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "string (@format uuid)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".items[" +
                                                        _index2 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<string>",
                                        value: input.items,
                                    }),
                                (((Array.isArray(input.minItems) &&
                                    (3 <= input.minItems.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".minItems",
                                            expected:
                                                "Array.length (@minItems 3)",
                                            value: input.minItems,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "Array<number>",
                                        value: input.minItems,
                                    })) &&
                                    input.minItems
                                        .map(
                                            (elem: any, _index3: number) =>
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem) &&
                                                    (3 <= elem ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".minItems[" +
                                                                    _index3 +
                                                                    "]",
                                                                expected:
                                                                    "number (@minimum 3)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".minItems[" +
                                                        _index3 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "Array<number>",
                                        value: input.minItems,
                                    }),
                                (((Array.isArray(input.both) &&
                                    (3 <= input.both.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".both",
                                            expected:
                                                "Array.length (@minItems 3)",
                                            value: input.both,
                                        })) &&
                                    (7 >= input.both.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".both",
                                            expected:
                                                "Array.length (@maxItems 7)",
                                            value: input.both,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".both",
                                        expected: "Array<string>",
                                        value: input.both,
                                    })) &&
                                    input.both
                                        .map(
                                            (elem: any, _index4: number) =>
                                                ("string" === typeof elem &&
                                                    ($is_uuid(elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".both[" +
                                                                    _index4 +
                                                                    "]",
                                                                expected:
                                                                    "string (@format uuid)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".both[" +
                                                        _index4 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".both",
                                        expected: "Array<string>",
                                        value: input.both,
                                    }),
                                (((Array.isArray(input.equal) &&
                                    (10 <= input.equal.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected:
                                                "Array.length (@minItems 10)",
                                            value: input.equal,
                                        })) &&
                                    (10 >= input.equal.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected:
                                                "Array.length (@maxItems 10)",
                                            value: input.equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "Array<number>",
                                        value: input.equal,
                                    })) &&
                                    input.equal
                                        .map(
                                            (elem: any, _index5: number) =>
                                                ("number" === typeof elem &&
                                                    (10 <= elem ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".equal[" +
                                                                    _index5 +
                                                                    "]",
                                                                expected:
                                                                    "number (@minimum 10)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                    (10 >= elem ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".equal[" +
                                                                    _index5 +
                                                                    "]",
                                                                expected:
                                                                    "number (@maximum 10)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".equal[" +
                                                        _index5 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "Array<number>",
                                        value: input.equal,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagArray",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagArray",
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
            const decode = (input: Uint8Array): TagArray => {
                const $Reader = (typia.protobuf.createValidateDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        value: [] as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.value.push(
                                    $pdo1(reader, reader.uint32()),
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
                        items: [] as any,
                        minItems: [] as any,
                        both: [] as any,
                        equal: [] as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.items.push(reader.string());
                                break;
                            case 2:
                                if (2 === (tag & 7)) {
                                    const piece =
                                        reader.uint32() + reader.index();
                                    while (reader.index() < piece)
                                        output.minItems.push(reader.double());
                                } else output.minItems.push(reader.double());
                                break;
                            case 3:
                                output.both.push(reader.string());
                                break;
                            case 4:
                                if (2 === (tag & 7)) {
                                    const piece =
                                        reader.uint32() + reader.index();
                                    while (reader.index() < piece)
                                        output.equal.push(reader.double());
                                } else output.equal.push(reader.double());
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
            const output = decode(input);
            return validate(output) as any;
        },
        encode: (input: TagArray): Uint8Array => {
            const $is_uuid = (typia.protobuf.createEncode as any).is_uuid;
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
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
                    // property "items";
                    if (0 !== input.items.length) {
                        for (const elem of input.items) {
                            writer.uint32(10);
                            writer.string(elem);
                        }
                    }
                    // property "minItems";
                    if (0 !== input.minItems.length) {
                        writer.uint32(18);
                        writer.fork();
                        for (const elem of input.minItems) {
                            writer.double(elem);
                        }
                        writer.ldelim();
                    }
                    // property "both";
                    if (0 !== input.both.length) {
                        for (const elem of input.both) {
                            writer.uint32(26);
                            writer.string(elem);
                        }
                    }
                    // property "equal";
                    if (0 !== input.equal.length) {
                        writer.uint32(34);
                        writer.fork();
                        for (const elem of input.equal) {
                            writer.double(elem);
                        }
                        writer.ldelim();
                    }
                };
                const $io1 = (input: any): boolean =>
                    Array.isArray(input.items) &&
                    3 === input.items.length &&
                    input.items.every(
                        (elem: any) =>
                            "string" === typeof elem && $is_uuid(elem),
                    ) &&
                    Array.isArray(input.minItems) &&
                    3 <= input.minItems.length &&
                    input.minItems.every(
                        (elem: any) => "number" === typeof elem && 3 <= elem,
                    ) &&
                    Array.isArray(input.both) &&
                    3 <= input.both.length &&
                    7 >= input.both.length &&
                    input.both.every(
                        (elem: any) =>
                            "string" === typeof elem && $is_uuid(elem),
                    ) &&
                    Array.isArray(input.equal) &&
                    10 <= input.equal.length &&
                    10 >= input.equal.length &&
                    input.equal.every(
                        (elem: any) =>
                            "number" === typeof elem &&
                            10 <= elem &&
                            10 >= elem,
                    );
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
