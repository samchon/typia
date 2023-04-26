import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { TagFormat } from "../../../structures/TagFormat";

export const test_createValidateParse_TagFormat = _test_validateParse(
    "TagFormat",
    TagFormat.generate,
    (input: string): typia.IValidation<typia.Primitive<TagFormat>> => {
        const validate = (input: any): typia.IValidation<TagFormat> => {
            const __is = (input: any): input is TagFormat => {
                const $is_uuid = (typia.createValidateParse as any).is_uuid;
                const $is_email = (typia.createValidateParse as any).is_email;
                const $is_url = (typia.createValidateParse as any).is_url;
                const $is_ipv4 = (typia.createValidateParse as any).is_ipv4;
                const $is_ipv6 = (typia.createValidateParse as any).is_ipv6;
                const $is_date = (typia.createValidateParse as any).is_date;
                const $is_datetime = (typia.createValidateParse as any)
                    .is_datetime;
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.uuid &&
                    $is_uuid(input.uuid) &&
                    "string" === typeof input.email &&
                    $is_email(input.email) &&
                    "string" === typeof input.url &&
                    $is_url(input.url) &&
                    "string" === typeof input.ipv4 &&
                    $is_ipv4(input.ipv4) &&
                    "string" === typeof input.ipv6 &&
                    $is_ipv6(input.ipv6) &&
                    "string" === typeof input.date &&
                    $is_date(input.date) &&
                    "string" === typeof input.date_time &&
                    $is_datetime(input.date_time) &&
                    "string" === typeof input.datetime &&
                    $is_datetime(input.datetime) &&
                    "string" === typeof input.dateTime &&
                    $is_datetime(input.dateTime) &&
                    "string" === typeof input.custom;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const errors = [] as any[];
            const $report = (typia.createValidateParse as any).report(errors);
            const $is_uuid = (typia.createValidateParse as any).is_uuid;
            const $is_email = (typia.createValidateParse as any).is_email;
            const $is_url = (typia.createValidateParse as any).is_url;
            const $is_ipv4 = (typia.createValidateParse as any).is_ipv4;
            const $is_ipv6 = (typia.createValidateParse as any).is_ipv6;
            const $is_date = (typia.createValidateParse as any).is_date;
            const $is_datetime = (typia.createValidateParse as any).is_datetime;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagFormat => {
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
                                        expected: "string (@format datetime)",
                                        value: input.date_time,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".date_time",
                                    expected: "string",
                                    value: input.date_time,
                                }),
                            ("string" === typeof input.datetime &&
                                ($is_datetime(input.datetime) ||
                                    $report(_exceptionable, {
                                        path: _path + ".datetime",
                                        expected: "string (@format datetime)",
                                        value: input.datetime,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".datetime",
                                    expected: "string",
                                    value: input.datetime,
                                }),
                            ("string" === typeof input.dateTime &&
                                ($is_datetime(input.dateTime) ||
                                    $report(_exceptionable, {
                                        path: _path + ".dateTime",
                                        expected: "string (@format datetime)",
                                        value: input.dateTime,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".dateTime",
                                    expected: "string",
                                    value: input.dateTime,
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
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        input = JSON.parse(input);
        const output = validate(input);
        return output as any;
    },
    TagFormat.SPOILERS,
);
