import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { TagFormat } from "../../../structures/TagFormat";

export const test_json_validateStringify_TagFormat =
    _test_json_validateStringify("TagFormat")<TagFormat>(TagFormat)((input) =>
        ((input: TagFormat): typia.IValidation<string> => {
            const validate = (input: any): typia.IValidation<TagFormat> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagFormat => {
                    const $is_uuid = (typia.json.validateStringify as any)
                        .is_uuid;
                    const $is_email = (typia.json.validateStringify as any)
                        .is_email;
                    const $is_url = (typia.json.validateStringify as any)
                        .is_url;
                    const $is_ipv4 = (typia.json.validateStringify as any)
                        .is_ipv4;
                    const $is_ipv6 = (typia.json.validateStringify as any)
                        .is_ipv6;
                    const $is_date = (typia.json.validateStringify as any)
                        .is_date;
                    const $is_datetime = (typia.json.validateStringify as any)
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
                if (false === __is(input)) {
                    const $report = (
                        typia.json.validateStringify as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagFormat => {
                        const $is_uuid = (typia.json.validateStringify as any)
                            .is_uuid;
                        const $is_email = (typia.json.validateStringify as any)
                            .is_email;
                        const $is_url = (typia.json.validateStringify as any)
                            .is_url;
                        const $is_ipv4 = (typia.json.validateStringify as any)
                            .is_ipv4;
                        const $is_ipv6 = (typia.json.validateStringify as any)
                            .is_ipv6;
                        const $is_date = (typia.json.validateStringify as any)
                            .is_date;
                        const $is_datetime = (
                            typia.json.validateStringify as any
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
                                            expected: "string (@format uuid)",
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
                                            expected: "string (@format email)",
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
                                            expected: "string (@format url)",
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
                                            expected: "string (@format ipv4)",
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
                                            expected: "string (@format ipv6)",
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
                                            expected: "string (@format date)",
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
                            ((("object" === typeof input && null !== input) ||
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
            const stringify = (input: TagFormat): string => {
                const $string = (typia.json.validateStringify as any).string;
                const $is_uuid = (typia.json.validateStringify as any).is_uuid;
                const $is_email = (typia.json.validateStringify as any)
                    .is_email;
                const $is_url = (typia.json.validateStringify as any).is_url;
                const $is_ipv4 = (typia.json.validateStringify as any).is_ipv4;
                const $is_ipv6 = (typia.json.validateStringify as any).is_ipv6;
                const $is_date = (typia.json.validateStringify as any).is_date;
                const $is_datetime = (typia.json.validateStringify as any)
                    .is_datetime;
                return `{"uuid":${$string(
                    (input as any).uuid,
                )},"email":${$string((input as any).email)},"url":${$string(
                    (input as any).url,
                )},"ipv4":${$string((input as any).ipv4)},"ipv6":${$string(
                    (input as any).ipv6,
                )},"date":${$string((input as any).date)},"date_time":${$string(
                    (input as any).date_time,
                )},"custom":${$string((input as any).custom)}}`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    );
