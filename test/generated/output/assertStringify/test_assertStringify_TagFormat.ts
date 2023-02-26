import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TagFormat } from "../../../structures/TagFormat";

export const test_assertStringify_TagFormat = _test_assertStringify(
    "TagFormat",
    TagFormat.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): TagFormat => {
                const $guard = (typia.assertStringify as any).guard;
                const $is_uuid = (typia.assertStringify as any).is_uuid;
                const $is_email = (typia.assertStringify as any).is_email;
                const $is_url = (typia.assertStringify as any).is_url;
                const $is_ipv4 = (typia.assertStringify as any).is_ipv4;
                const $is_ipv6 = (typia.assertStringify as any).is_ipv6;
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
                                expected: "Resolve<TagFormat>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: TagFormat): string => {
                const $string = (typia.assertStringify as any).string;
                const $is_uuid = (typia.assertStringify as any).is_uuid;
                const $is_email = (typia.assertStringify as any).is_email;
                const $is_url = (typia.assertStringify as any).is_url;
                const $is_ipv4 = (typia.assertStringify as any).is_ipv4;
                const $is_ipv6 = (typia.assertStringify as any).is_ipv6;
                const $so0 = (input: any): any =>
                    `{"uuid":${'"' + input.uuid + '"'},"email":${
                        '"' + input.email + '"'
                    },"url":${'"' + input.url + '"'},"ipv4":${
                        '"' + input.ipv4 + '"'
                    },"ipv6":${'"' + input.ipv6 + '"'},"custom":${$string(
                        input.custom,
                    )}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        })(input),
    TagFormat.SPOILERS,
);
