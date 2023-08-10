import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagCustom } from "../../../structures/TagCustom";

export const test_is_TagCustom = _test_is<TagCustom>(TagCustom)((input) =>
    ((input: any): input is TagCustom => {
        const $is_uuid = (typia.is as any).is_uuid;
        const $is_custom = (typia.is as any).is_custom;
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).id &&
            $is_uuid((input as any).id) &&
            "string" === typeof (input as any).dollar &&
            $is_custom("dollar", "string", "", (input as any).dollar) &&
            "string" === typeof (input as any).postfix &&
            $is_custom("postfix", "string", "abcd", (input as any).postfix) &&
            "number" === typeof (input as any).log &&
            Number.isFinite((input as any).log) &&
            $is_custom("powerOf", "number", "10", (input as any).log)
        );
    })(input),
);
