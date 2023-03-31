import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagCustom } from "../../../structures/TagCustom";

export const test_is_TagCustom = _test_is(
    "TagCustom",
    TagCustom.generate,
    (input) =>
        ((input: any): input is TagCustom => {
            const $is_uuid = (typia.is as any).is_uuid;
            const $is_custom = (typia.is as any).is_custom;
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                true === $is_uuid(input.id) &&
                "string" === typeof input.dolloar &&
                $is_custom("dollar", "string", "", input.dolloar) &&
                "string" === typeof input.postfix &&
                $is_custom("postfix", "string", "abcd", input.postfix) &&
                "number" === typeof input.log &&
                Number.isFinite(input.log) &&
                $is_custom("powerOf", "number", "10", input.log);
            return "object" === typeof input && null !== input && $io0(input);
        })(input),
    TagCustom.SPOILERS,
);
