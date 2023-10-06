import typia from "../../../../src";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_protobuf_createAssertDecode_CommentTagFormat =
    _test_protobuf_assertDecode("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )({
        decode: (input: Uint8Array): typia.Resolved<CommentTagFormat> => {
            const decode = (
                input: Uint8Array,
            ): typia.Resolved<CommentTagFormat> => {
                const $Reader = (typia.protobuf.createAssertDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        uuid: "" as any,
                        email: "" as any,
                        url: "" as any,
                        ipv4: "" as any,
                        ipv6: "" as any,
                        date: "" as any,
                        date_time: "" as any,
                        custom: "" as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                // string;
                                output.uuid = reader.string();
                                break;
                            case 2:
                                // string;
                                output.email = reader.string();
                                break;
                            case 3:
                                // string;
                                output.url = reader.string();
                                break;
                            case 4:
                                // string;
                                output.ipv4 = reader.string();
                                break;
                            case 5:
                                // string;
                                output.ipv6 = reader.string();
                                break;
                            case 6:
                                // string;
                                output.date = reader.string();
                                break;
                            case 7:
                                // string;
                                output.date_time = reader.string();
                                break;
                            case 8:
                                // string;
                                output.custom = reader.string();
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
            const assert = (input: any): CommentTagFormat => {
                const __is = (input: any): input is CommentTagFormat => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).uuid &&
                        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                            (input as any).uuid,
                        ) &&
                        "string" === typeof (input as any).email &&
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                            (input as any).email,
                        ) &&
                        "string" === typeof (input as any).url &&
                        /^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
                            (input as any).url,
                        ) &&
                        "string" === typeof (input as any).ipv4 &&
                        /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                            (input as any).ipv4,
                        ) &&
                        "string" === typeof (input as any).ipv6 &&
                        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
                            (input as any).ipv6,
                        ) &&
                        "string" === typeof (input as any).date &&
                        /^(\d{4})-(\d{2})-(\d{2})$/.test((input as any).date) &&
                        "string" === typeof (input as any).date_time &&
                        !isNaN(new Date((input as any).date_time).getTime()) &&
                        "string" === typeof (input as any).custom
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is CommentTagFormat => {
                        const $guard = (
                            typia.protobuf.createAssertDecode as any
                        ).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("string" === typeof input.uuid &&
                                (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                                    input.uuid,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uuid",
                                        expected: 'string & Format<"uuid">',
                                        value: input.uuid,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uuid",
                                    expected: '(string & Format<"uuid">)',
                                    value: input.uuid,
                                })) &&
                            (("string" === typeof input.email &&
                                (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                                    input.email,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".email",
                                        expected: 'string & Format<"email">',
                                        value: input.email,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".email",
                                    expected: '(string & Format<"email">)',
                                    value: input.email,
                                })) &&
                            (("string" === typeof input.url &&
                                (/^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
                                    input.url,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".url",
                                        expected: 'string & Format<"url">',
                                        value: input.url,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".url",
                                    expected: '(string & Format<"url">)',
                                    value: input.url,
                                })) &&
                            (("string" === typeof input.ipv4 &&
                                (/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                                    input.ipv4,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".ipv4",
                                        expected: 'string & Format<"ipv4">',
                                        value: input.ipv4,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ipv4",
                                    expected: '(string & Format<"ipv4">)',
                                    value: input.ipv4,
                                })) &&
                            (("string" === typeof input.ipv6 &&
                                (/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
                                    input.ipv6,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".ipv6",
                                        expected: 'string & Format<"ipv6">',
                                        value: input.ipv6,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ipv6",
                                    expected: '(string & Format<"ipv6">)',
                                    value: input.ipv6,
                                })) &&
                            (("string" === typeof input.date &&
                                (/^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".date",
                                        expected: 'string & Format<"date">',
                                        value: input.date,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".date",
                                    expected: '(string & Format<"date">)',
                                    value: input.date,
                                })) &&
                            (("string" === typeof input.date_time &&
                                (!isNaN(new Date(input.date_time).getTime()) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".date_time",
                                        expected:
                                            'string & Format<"date-time">',
                                        value: input.date_time,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".date_time",
                                    expected: '(string & Format<"date-time">)',
                                    value: input.date_time,
                                })) &&
                            ("string" === typeof input.custom ||
                                $guard(_exceptionable, {
                                    path: _path + ".custom",
                                    expected: "string",
                                    value: input.custom,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "CommentTagFormat",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "CommentTagFormat",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const output = decode(input);
            return assert(output) as any;
        },
        encode: (input: CommentTagFormat): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "uuid";
                    writer.uint32(10);
                    writer.string(input.uuid);
                    // property "email";
                    writer.uint32(18);
                    writer.string(input.email);
                    // property "url";
                    writer.uint32(26);
                    writer.string(input.url);
                    // property "ipv4";
                    writer.uint32(34);
                    writer.string(input.ipv4);
                    // property "ipv6";
                    writer.uint32(42);
                    writer.string(input.ipv6);
                    // property "date";
                    writer.uint32(50);
                    writer.string(input.date);
                    // property "date_time";
                    writer.uint32(58);
                    writer.string(input.date_time);
                    // property "custom";
                    writer.uint32(66);
                    writer.string(input.custom);
                };
                //CommentTagFormat;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
