import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TagFormat } from "../../../structures/TagFormat";

export const test_protobuf_assertEncode_TagFormat = _test_protobuf_assertEncode(
    "TagFormat",
)<TagFormat>(TagFormat)({
    assertEncode: (input: any): Uint8Array => {
        const assert = (input: any): TagFormat => {
            const __is = (input: any): input is TagFormat => {
                const $is_uuid = (typia.protobuf.createAssertEncode as any)
                    .is_uuid;
                const $is_email = (typia.protobuf.createAssertEncode as any)
                    .is_email;
                const $is_url = (typia.protobuf.createAssertEncode as any)
                    .is_url;
                const $is_ipv4 = (typia.protobuf.createAssertEncode as any)
                    .is_ipv4;
                const $is_ipv6 = (typia.protobuf.createAssertEncode as any)
                    .is_ipv6;
                const $is_date = (typia.protobuf.createAssertEncode as any)
                    .is_date;
                const $is_datetime = (typia.protobuf.createAssertEncode as any)
                    .is_datetime;
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).uuid &&
                    $is_uuid((input as any).uuid) &&
                    "string" === typeof (input as any).email &&
                    $is_email((input as any).email) &&
                    "string" === typeof (input as any).url &&
                    $is_url((input as any).url) &&
                    "string" === typeof (input as any).ipv4 &&
                    $is_ipv4((input as any).ipv4) &&
                    "string" === typeof (input as any).ipv6 &&
                    $is_ipv6((input as any).ipv6) &&
                    "string" === typeof (input as any).date &&
                    $is_date((input as any).date) &&
                    "string" === typeof (input as any).date_time &&
                    $is_datetime((input as any).date_time) &&
                    "string" === typeof (input as any).custom
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagFormat => {
                    const $guard = (typia.protobuf.createAssertEncode as any)
                        .guard;
                    const $is_uuid = (typia.protobuf.createAssertEncode as any)
                        .is_uuid;
                    const $is_email = (typia.protobuf.createAssertEncode as any)
                        .is_email;
                    const $is_url = (typia.protobuf.createAssertEncode as any)
                        .is_url;
                    const $is_ipv4 = (typia.protobuf.createAssertEncode as any)
                        .is_ipv4;
                    const $is_ipv6 = (typia.protobuf.createAssertEncode as any)
                        .is_ipv6;
                    const $is_date = (typia.protobuf.createAssertEncode as any)
                        .is_date;
                    const $is_datetime = (
                        typia.protobuf.createAssertEncode as any
                    ).is_datetime;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("string" === typeof input.uuid &&
                            ($is_uuid(input.uuid) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uuid",
                                    expected: "string (@format uuid)",
                                    value: input.uuid,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".uuid",
                                expected: "string",
                                value: input.uuid,
                            })) &&
                        (("string" === typeof input.email &&
                            ($is_email(input.email) ||
                                $guard(_exceptionable, {
                                    path: _path + ".email",
                                    expected: "string (@format email)",
                                    value: input.email,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".email",
                                expected: "string",
                                value: input.email,
                            })) &&
                        (("string" === typeof input.url &&
                            ($is_url(input.url) ||
                                $guard(_exceptionable, {
                                    path: _path + ".url",
                                    expected: "string (@format url)",
                                    value: input.url,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".url",
                                expected: "string",
                                value: input.url,
                            })) &&
                        (("string" === typeof input.ipv4 &&
                            ($is_ipv4(input.ipv4) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ipv4",
                                    expected: "string (@format ipv4)",
                                    value: input.ipv4,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".ipv4",
                                expected: "string",
                                value: input.ipv4,
                            })) &&
                        (("string" === typeof input.ipv6 &&
                            ($is_ipv6(input.ipv6) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ipv6",
                                    expected: "string (@format ipv6)",
                                    value: input.ipv6,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".ipv6",
                                expected: "string",
                                value: input.ipv6,
                            })) &&
                        (("string" === typeof input.date &&
                            ($is_date(input.date) ||
                                $guard(_exceptionable, {
                                    path: _path + ".date",
                                    expected: "string (@format date)",
                                    value: input.date,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".date",
                                expected: "string",
                                value: input.date,
                            })) &&
                        (("string" === typeof input.date_time &&
                            ($is_datetime(input.date_time) ||
                                $guard(_exceptionable, {
                                    path: _path + ".date_time",
                                    expected: "string (@format datetime)",
                                    value: input.date_time,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".date_time",
                                expected: "string",
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
                                expected: "TagFormat",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagFormat",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const encode = (input: TagFormat): Uint8Array => {
            const $is_uuid = (typia.protobuf.createAssertEncode as any).is_uuid;
            const $is_email = (typia.protobuf.createAssertEncode as any)
                .is_email;
            const $is_url = (typia.protobuf.createAssertEncode as any).is_url;
            const $is_ipv4 = (typia.protobuf.createAssertEncode as any).is_ipv4;
            const $is_ipv6 = (typia.protobuf.createAssertEncode as any).is_ipv6;
            const $is_date = (typia.protobuf.createAssertEncode as any).is_date;
            const $is_datetime = (typia.protobuf.createAssertEncode as any)
                .is_datetime;
            const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
            const $Writer = (typia.protobuf.createAssertEncode as any).Writer;
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
                //TagFormat;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        };
        return encode(assert(input));
    },
    message:
        'syntax = "proto3";\n\nmessage TagFormat {\n    required string uuid = 1;\n    required string email = 2;\n    required string url = 3;\n    required string ipv4 = 4;\n    required string ipv6 = 5;\n    required string date = 6;\n    required string date_time = 7;\n    required string custom = 8;\n}',
    decode: (input: Uint8Array): typia.Resolved<TagFormat> => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
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
    },
});
