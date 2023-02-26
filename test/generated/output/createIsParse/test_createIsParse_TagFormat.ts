import typia from "../../../../src";
import { TagFormat } from "../../../structures/TagFormat";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagFormat = _test_isParse(
    "TagFormat",
    TagFormat.generate,
    (input: any): typia.Primitive<TagFormat> => {
        const is = (input: any): input is TagFormat => {
            const $is_uuid = (typia.createIsParse as any).is_uuid;
            const $is_email = (typia.createIsParse as any).is_email;
            const $is_url = (typia.createIsParse as any).is_url;
            const $is_ipv4 = (typia.createIsParse as any).is_ipv4;
            const $is_ipv6 = (typia.createIsParse as any).is_ipv6;
            const $io0 = (input: any): boolean =>
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
                "string" === typeof input.custom;
            return "object" === typeof input && null !== input && $io0(input);
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    TagFormat.SPOILERS,
);
