import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TagCustom } from "../../../structures/TagCustom";

export const test_createIsClone_TagCustom = _test_isClone(
    "TagCustom",
    TagCustom.generate,
    (input: any): typia.Primitive<TagCustom> | null => {
        const is = (input: any): input is TagCustom => {
            const $is_uuid = (typia.createIsClone as any).is_uuid;
            const $is_custom = (typia.createIsClone as any).is_custom;
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
        const clone = (input: TagCustom): typia.Primitive<TagCustom> => {
            const $is_uuid = (typia.createIsClone as any).is_uuid;
            const $is_custom = (typia.createIsClone as any).is_custom;
            const $co0 = (input: any): any => ({
                id: input.id as any,
                dollar: input.dollar as any,
                postfix: input.postfix as any,
                log: input.log as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
    TagCustom.SPOILERS,
);
