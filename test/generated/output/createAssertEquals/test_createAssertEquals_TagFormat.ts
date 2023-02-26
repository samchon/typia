import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagFormat } from "../../../structures/TagFormat";

export const test_createAssertEquals_TagFormat = _test_assertEquals(
    "TagFormat",
    TagFormat.generate,
    (input: any): TagFormat => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $is_uuid = (typia.createAssertEquals as any).is_uuid;
        const $is_email = (typia.createAssertEquals as any).is_email;
        const $is_url = (typia.createAssertEquals as any).is_url;
        const $is_ipv4 = (typia.createAssertEquals as any).is_ipv4;
        const $is_ipv6 = (typia.createAssertEquals as any).is_ipv6;
        const $join = (typia.createAssertEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagFormat => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("string" === typeof input.uuid &&
                    true === $is_uuid(input.uuid)) ||
                    $guard(_exceptionable, {
                        path: _path + ".uuid",
                        expected: "string",
                        value: input.uuid,
                    })) &&
                (("string" === typeof input.email &&
                    true === $is_email(input.email)) ||
                    $guard(_exceptionable, {
                        path: _path + ".email",
                        expected: "string",
                        value: input.email,
                    })) &&
                (("string" === typeof input.url &&
                    true === $is_url(input.url)) ||
                    $guard(_exceptionable, {
                        path: _path + ".url",
                        expected: "string",
                        value: input.url,
                    })) &&
                (("string" === typeof input.ipv4 &&
                    true === $is_ipv4(input.ipv4)) ||
                    $guard(_exceptionable, {
                        path: _path + ".ipv4",
                        expected: "string",
                        value: input.ipv4,
                    })) &&
                (("string" === typeof input.ipv6 &&
                    true === $is_ipv6(input.ipv6)) ||
                    $guard(_exceptionable, {
                        path: _path + ".ipv6",
                        expected: "string",
                        value: input.ipv6,
                    })) &&
                ("string" === typeof input.custom ||
                    $guard(_exceptionable, {
                        path: _path + ".custom",
                        expected: "string",
                        value: input.custom,
                    })) &&
                (6 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (
                            [
                                "uuid",
                                "email",
                                "url",
                                "ipv4",
                                "ipv6",
                                "custom",
                            ].some((prop) => key === prop)
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
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<TagFormat>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
