import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { TagFormat } from "../../../structures/TagFormat";

export const test_createValidateStringify_TagFormat = _test_validateStringify(
    "TagFormat",
    TagFormat.generate,
    (input: TagFormat): typia.IValidation<string> => {
        const validate = (input: any): typia.IValidation<TagFormat> => {
            const errors = [] as any[];
            const $report = (typia.createValidateStringify as any).report(
                errors,
            );
            const $is_uuid = (typia.createValidateStringify as any).is_uuid;
            const $is_email = (typia.createValidateStringify as any).is_email;
            const $is_url = (typia.createValidateStringify as any).is_url;
            const $is_ipv4 = (typia.createValidateStringify as any).is_ipv4;
            const $is_ipv6 = (typia.createValidateStringify as any).is_ipv6;
            const $is_date = (typia.createValidateStringify as any).is_date;
            const $is_datetime = (typia.createValidateStringify as any)
                .is_datetime;
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
                            true === $is_uuid(input.uuid)) ||
                            $report(_exceptionable, {
                                path: _path + ".uuid",
                                expected: "string",
                                value: input.uuid,
                            }),
                        ("string" === typeof input.email &&
                            true === $is_email(input.email)) ||
                            $report(_exceptionable, {
                                path: _path + ".email",
                                expected: "string",
                                value: input.email,
                            }),
                        ("string" === typeof input.url &&
                            true === $is_url(input.url)) ||
                            $report(_exceptionable, {
                                path: _path + ".url",
                                expected: "string",
                                value: input.url,
                            }),
                        ("string" === typeof input.ipv4 &&
                            true === $is_ipv4(input.ipv4)) ||
                            $report(_exceptionable, {
                                path: _path + ".ipv4",
                                expected: "string",
                                value: input.ipv4,
                            }),
                        ("string" === typeof input.ipv6 &&
                            true === $is_ipv6(input.ipv6)) ||
                            $report(_exceptionable, {
                                path: _path + ".ipv6",
                                expected: "string",
                                value: input.ipv6,
                            }),
                        ("string" === typeof input.date &&
                            true === $is_date(input.date)) ||
                            $report(_exceptionable, {
                                path: _path + ".date",
                                expected: "string",
                                value: input.date,
                            }),
                        ("string" === typeof input.date_time &&
                            true === $is_datetime(input.date_time)) ||
                            $report(_exceptionable, {
                                path: _path + ".date_time",
                                expected: "string",
                                value: input.date_time,
                            }),
                        ("string" === typeof input.datetime &&
                            true === $is_datetime(input.datetime)) ||
                            $report(_exceptionable, {
                                path: _path + ".datetime",
                                expected: "string",
                                value: input.datetime,
                            }),
                        ("string" === typeof input.dateTime &&
                            true === $is_datetime(input.dateTime)) ||
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
                            expected: "Resolve<TagFormat>",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<TagFormat>",
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
        const stringify = (input: TagFormat): string => {
            const $string = (typia.createValidateStringify as any).string;
            const $is_uuid = (typia.createValidateStringify as any).is_uuid;
            const $is_email = (typia.createValidateStringify as any).is_email;
            const $is_url = (typia.createValidateStringify as any).is_url;
            const $is_ipv4 = (typia.createValidateStringify as any).is_ipv4;
            const $is_ipv6 = (typia.createValidateStringify as any).is_ipv6;
            const $is_date = (typia.createValidateStringify as any).is_date;
            const $is_datetime = (typia.createValidateStringify as any)
                .is_datetime;
            const $so0 = (input: any): any =>
                `{"uuid":${'"' + input.uuid + '"'},"email":${
                    '"' + input.email + '"'
                },"url":${'"' + input.url + '"'},"ipv4":${
                    '"' + input.ipv4 + '"'
                },"ipv6":${'"' + input.ipv6 + '"'},"date":${
                    '"' + input.date + '"'
                },"date_time":${'"' + input.date_time + '"'},"datetime":${
                    '"' + input.datetime + '"'
                },"dateTime":${'"' + input.dateTime + '"'},"custom":${$string(
                    input.custom,
                )}}`;
            return $so0(input);
        };
        const output = validate(input) as any;
        if (output.success) output.data = stringify(input);
        return output;
    },
    TagFormat.SPOILERS,
);
