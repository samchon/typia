import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagFormat } from "../../../structures/TagFormat";

export const test_random_TagFormat = _test_random<TagFormat>(TagFormat)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<TagFormat> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                uuid:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "format",
                            value: "uuid",
                        },
                    ]) ?? (generator?.uuid ?? $generator.uuid)(),
                email:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "format",
                            value: "email",
                        },
                    ]) ?? (generator?.email ?? $generator.email)(),
                url:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "format",
                            value: "url",
                        },
                    ]) ?? (generator?.url ?? $generator.url)(),
                ipv4:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "format",
                            value: "ipv4",
                        },
                    ]) ?? (generator?.ipv4 ?? $generator.ipv4)(),
                ipv6:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "format",
                            value: "ipv6",
                        },
                    ]) ?? (generator?.ipv6 ?? $generator.ipv6)(),
                date:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "format",
                            value: "date",
                        },
                    ]) ?? (generator?.date ?? $generator.date)(),
                date_time:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "format",
                            value: "date-time",
                        },
                    ]) ?? (generator?.datetime ?? $generator.datetime)(),
                datetime:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "format",
                            value: "datetime",
                        },
                    ]) ?? (generator?.datetime ?? $generator.datetime)(),
                dateTime:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "format",
                            value: "dateTime",
                        },
                    ]) ?? (generator?.datetime ?? $generator.datetime)(),
                custom:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "format",
                            value: "my-custom-format",
                        },
                    ]) ?? (generator?.string ?? $generator.string)(),
            });
            return $ro0();
        })(),
    assert: (input: any): TagFormat => {
        const __is = (input: any): input is TagFormat => {
            const $is_uuid = (typia.createAssert as any).is_uuid;
            const $is_email = (typia.createAssert as any).is_email;
            const $is_url = (typia.createAssert as any).is_url;
            const $is_ipv4 = (typia.createAssert as any).is_ipv4;
            const $is_ipv6 = (typia.createAssert as any).is_ipv6;
            const $is_date = (typia.createAssert as any).is_date;
            const $is_datetime = (typia.createAssert as any).is_datetime;
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
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagFormat => {
                const $guard = (typia.createAssert as any).guard;
                const $is_uuid = (typia.createAssert as any).is_uuid;
                const $is_email = (typia.createAssert as any).is_email;
                const $is_url = (typia.createAssert as any).is_url;
                const $is_ipv4 = (typia.createAssert as any).is_ipv4;
                const $is_ipv6 = (typia.createAssert as any).is_ipv6;
                const $is_date = (typia.createAssert as any).is_date;
                const $is_datetime = (typia.createAssert as any).is_datetime;
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
                    (("string" === typeof input.datetime &&
                        ($is_datetime(input.datetime) ||
                            $guard(_exceptionable, {
                                path: _path + ".datetime",
                                expected: "string (@format datetime)",
                                value: input.datetime,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".datetime",
                            expected: "string",
                            value: input.datetime,
                        })) &&
                    (("string" === typeof input.dateTime &&
                        ($is_datetime(input.dateTime) ||
                            $guard(_exceptionable, {
                                path: _path + ".dateTime",
                                expected: "string (@format datetime)",
                                value: input.dateTime,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".dateTime",
                            expected: "string",
                            value: input.dateTime,
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
    },
});
