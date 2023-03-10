import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { TagFormat } from "../../../structures/TagFormat";

export const test_validateClone_TagFormat = _test_validateClone(
    "TagFormat",
    TagFormat.generate,
    (input) =>
        ((input: any): typia.IValidation<typia.Primitive<TagFormat>> => {
            const validate = (input: any): typia.IValidation<TagFormat> => {
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                const $is_uuid = (typia.validateClone as any).is_uuid;
                const $is_email = (typia.validateClone as any).is_email;
                const $is_url = (typia.validateClone as any).is_url;
                const $is_ipv4 = (typia.validateClone as any).is_ipv4;
                const $is_ipv6 = (typia.validateClone as any).is_ipv6;
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
            const clone = (input: TagFormat): typia.Primitive<TagFormat> => {
                const $is_uuid = (typia.validateClone as any).is_uuid;
                const $is_email = (typia.validateClone as any).is_email;
                const $is_url = (typia.validateClone as any).is_url;
                const $is_ipv4 = (typia.validateClone as any).is_ipv4;
                const $is_ipv6 = (typia.validateClone as any).is_ipv6;
                const $co0 = (input: any): any => ({
                    uuid: input.uuid as any,
                    email: input.email as any,
                    url: input.url as any,
                    ipv4: input.ipv4 as any,
                    ipv6: input.ipv6 as any,
                    custom: input.custom as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    TagFormat.SPOILERS,
);
