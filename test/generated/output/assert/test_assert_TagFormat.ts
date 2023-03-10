import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TagFormat } from "../../../structures/TagFormat";

export const test_assert_TagFormat = _test_assert(
    "TagFormat",
    TagFormat.generate,
    (input) =>
        ((input: any): TagFormat => {
            const $guard = (typia.assert as any).guard;
            const $is_uuid = (typia.assert as any).is_uuid;
            const $is_email = (typia.assert as any).is_email;
            const $is_url = (typia.assert as any).is_url;
            const $is_ipv4 = (typia.assert as any).is_ipv4;
            const $is_ipv6 = (typia.assert as any).is_ipv6;
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
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagFormat",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
    TagFormat.SPOILERS,
);
