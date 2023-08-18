import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { TagFormat } from "../../../structures/TagFormat";

export const test_protobuf_validateEncode_TagFormat =
    _test_protobuf_validateEncode<TagFormat>(TagFormat)({
        validateEncode: (input) =>
            ((input: TagFormat): typia.IValidation<Uint8Array> => {
                const validate = (input: any): typia.IValidation<TagFormat> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is TagFormat => {
                        const $is_uuid = (typia.protobuf.validateEncode as any)
                            .is_uuid;
                        const $is_email = (typia.protobuf.validateEncode as any)
                            .is_email;
                        const $is_url = (typia.protobuf.validateEncode as any)
                            .is_url;
                        const $is_ipv4 = (typia.protobuf.validateEncode as any)
                            .is_ipv4;
                        const $is_ipv6 = (typia.protobuf.validateEncode as any)
                            .is_ipv6;
                        const $is_date = (typia.protobuf.validateEncode as any)
                            .is_date;
                        const $is_datetime = (
                            typia.protobuf.validateEncode as any
                        ).is_datetime;
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
                    if (false === __is(input)) {
                        const $report = (
                            typia.protobuf.validateEncode as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is TagFormat => {
                            const $is_uuid = (
                                typia.protobuf.validateEncode as any
                            ).is_uuid;
                            const $is_email = (
                                typia.protobuf.validateEncode as any
                            ).is_email;
                            const $is_url = (
                                typia.protobuf.validateEncode as any
                            ).is_url;
                            const $is_ipv4 = (
                                typia.protobuf.validateEncode as any
                            ).is_ipv4;
                            const $is_ipv6 = (
                                typia.protobuf.validateEncode as any
                            ).is_ipv6;
                            const $is_date = (
                                typia.protobuf.validateEncode as any
                            ).is_date;
                            const $is_datetime = (
                                typia.protobuf.validateEncode as any
                            ).is_datetime;
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ("string" === typeof input.uuid &&
                                        ($is_uuid(input.uuid) ||
                                            $report(_exceptionable, {
                                                path: _path + ".uuid",
                                                expected:
                                                    "string (@format uuid)",
                                                value: input.uuid,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".uuid",
                                            expected: "string",
                                            value: input.uuid,
                                        }),
                                    ("string" === typeof input.email &&
                                        ($is_email(input.email) ||
                                            $report(_exceptionable, {
                                                path: _path + ".email",
                                                expected:
                                                    "string (@format email)",
                                                value: input.email,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".email",
                                            expected: "string",
                                            value: input.email,
                                        }),
                                    ("string" === typeof input.url &&
                                        ($is_url(input.url) ||
                                            $report(_exceptionable, {
                                                path: _path + ".url",
                                                expected:
                                                    "string (@format url)",
                                                value: input.url,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".url",
                                            expected: "string",
                                            value: input.url,
                                        }),
                                    ("string" === typeof input.ipv4 &&
                                        ($is_ipv4(input.ipv4) ||
                                            $report(_exceptionable, {
                                                path: _path + ".ipv4",
                                                expected:
                                                    "string (@format ipv4)",
                                                value: input.ipv4,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".ipv4",
                                            expected: "string",
                                            value: input.ipv4,
                                        }),
                                    ("string" === typeof input.ipv6 &&
                                        ($is_ipv6(input.ipv6) ||
                                            $report(_exceptionable, {
                                                path: _path + ".ipv6",
                                                expected:
                                                    "string (@format ipv6)",
                                                value: input.ipv6,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".ipv6",
                                            expected: "string",
                                            value: input.ipv6,
                                        }),
                                    ("string" === typeof input.date &&
                                        ($is_date(input.date) ||
                                            $report(_exceptionable, {
                                                path: _path + ".date",
                                                expected:
                                                    "string (@format date)",
                                                value: input.date,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".date",
                                            expected: "string",
                                            value: input.date,
                                        }),
                                    ("string" === typeof input.date_time &&
                                        ($is_datetime(input.date_time) ||
                                            $report(_exceptionable, {
                                                path: _path + ".date_time",
                                                expected:
                                                    "string (@format datetime)",
                                                value: input.date_time,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".date_time",
                                            expected: "string",
                                            value: input.date_time,
                                        }),
                                    "string" === typeof input.custom ||
                                        $report(_exceptionable, {
                                            path: _path + ".custom",
                                            expected: "string",
                                            value: input.custom,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "TagFormat",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagFormat",
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
                const encode = (input: TagFormat): Uint8Array => {
                    const $is_uuid = (typia.protobuf.validateEncode as any)
                        .is_uuid;
                    const $is_email = (typia.protobuf.validateEncode as any)
                        .is_email;
                    const $is_url = (typia.protobuf.validateEncode as any)
                        .is_url;
                    const $is_ipv4 = (typia.protobuf.validateEncode as any)
                        .is_ipv4;
                    const $is_ipv6 = (typia.protobuf.validateEncode as any)
                        .is_ipv6;
                    const $is_date = (typia.protobuf.validateEncode as any)
                        .is_date;
                    const $is_datetime = (typia.protobuf.validateEncode as any)
                        .is_datetime;
                    const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
                    const $Writer = (typia.protobuf.validateEncode as any)
                        .Writer;
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
            })(input),
        message:
            'syntax = "proto3";\n\nmessage TagFormat {\n    required string uuid = 1;\n    required string email = 2;\n    required string url = 3;\n    required string ipv4 = 4;\n    required string ipv6 = 5;\n    required string date = 6;\n    required string date_time = 7;\n    required string custom = 8;\n}',
    });
