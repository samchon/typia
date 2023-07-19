import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagFormat } from "../../../structures/TagFormat";

export const test_assertEquals_TagFormat = _test_assertEquals<TagFormat>(
    TagFormat,
)((input: any): TagFormat => {
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is TagFormat => {
        const $is_uuid = (typia.createAssertEquals as any).is_uuid;
        const $is_email = (typia.createAssertEquals as any).is_email;
        const $is_url = (typia.createAssertEquals as any).is_url;
        const $is_ipv4 = (typia.createAssertEquals as any).is_ipv4;
        const $is_ipv6 = (typia.createAssertEquals as any).is_ipv6;
        const $is_date = (typia.createAssertEquals as any).is_date;
        const $is_datetime = (typia.createAssertEquals as any).is_datetime;
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
            "string" === typeof input.custom &&
            (10 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "uuid",
                            "email",
                            "url",
                            "ipv4",
                            "ipv6",
                            "date",
                            "date_time",
                            "datetime",
                            "dateTime",
                            "custom",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagFormat => {
            const $guard = (typia.createAssertEquals as any).guard;
            const $is_uuid = (typia.createAssertEquals as any).is_uuid;
            const $is_email = (typia.createAssertEquals as any).is_email;
            const $is_url = (typia.createAssertEquals as any).is_url;
            const $is_ipv4 = (typia.createAssertEquals as any).is_ipv4;
            const $is_ipv6 = (typia.createAssertEquals as any).is_ipv6;
            const $is_date = (typia.createAssertEquals as any).is_date;
            const $is_datetime = (typia.createAssertEquals as any).is_datetime;
            const $join = (typia.createAssertEquals as any).join;
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
                    })) &&
                (10 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "uuid",
                                "email",
                                "url",
                                "ipv4",
                                "ipv6",
                                "date",
                                "date_time",
                                "datetime",
                                "dateTime",
                                "custom",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
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
});
