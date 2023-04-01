import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { TagCustom } from "../../../structures/TagCustom";

export const test_createIsParse_TagCustom = _test_isParse(
    "TagCustom",
    TagCustom.generate,
    (input: any): typia.Primitive<TagCustom> => {
        const is = (input: any): input is TagCustom => {
            const $is_uuid = (typia.createIsParse as any).is_uuid;
            const $is_custom = (typia.createIsParse as any).is_custom;
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                true === $is_uuid(input.id) &&
                "string" === typeof input.dollar &&
                $is_custom("dollar", "string", "", input.dollar) &&
                "string" === typeof input.postfix &&
                $is_custom("postfix", "string", "abcd", input.postfix) &&
                "number" === typeof input.log &&
                Number.isFinite(input.log) &&
                $is_custom("powerOf", "number", "10", input.log);
            return "object" === typeof input && null !== input && $io0(input);
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    TagCustom.SPOILERS,
);
