import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagFormat } from "../../../structures/TagFormat";

export const test_equals_TagFormat = _test_equals(
    "TagFormat",
    TagFormat.generate,
    (input) =>
        ((input: any, _exceptionable: boolean = true): input is TagFormat => {
            const $is_uuid = (typia.equals as any).is_uuid;
            const $is_email = (typia.equals as any).is_email;
            const $is_url = (typia.equals as any).is_url;
            const $is_ipv4 = (typia.equals as any).is_ipv4;
            const $is_ipv6 = (typia.equals as any).is_ipv6;
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.uuid &&
                true === $is_uuid(input.uuid) &&
                "string" === typeof input.email &&
                true === $is_email(input.email) &&
                "string" === typeof input.url &&
                true === $is_url(input.url) &&
                "string" === typeof input.ipv4 &&
                true === $is_ipv4(input.ipv4) &&
                "string" === typeof input.ipv6 &&
                true === $is_ipv6(input.ipv6) &&
                "string" === typeof input.custom &&
                (6 === Object.keys(input).length ||
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
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        })(input),
);
