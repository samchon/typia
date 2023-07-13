import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TagCustom } from "../../../structures/TagCustom";

export const test_misc_isClone_TagCustom = _test_misc_isClone(
    "TagCustom",
    TagCustom.generate,
    (input) =>
        ((input: any): typia.Primitive<TagCustom> | null => {
            const is = (input: any): input is TagCustom => {
                const $is_uuid = (typia.misc.isClone as any).is_uuid;
                const $is_custom = (typia.misc.isClone as any).is_custom;
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).id &&
                    $is_uuid((input as any).id) &&
                    "string" === typeof (input as any).dollar &&
                    $is_custom("dollar", "string", "", (input as any).dollar) &&
                    "string" === typeof (input as any).postfix &&
                    $is_custom(
                        "postfix",
                        "string",
                        "abcd",
                        (input as any).postfix,
                    ) &&
                    "number" === typeof (input as any).log &&
                    Number.isFinite((input as any).log) &&
                    $is_custom("powerOf", "number", "10", (input as any).log)
                );
            };
            const clone = (input: TagCustom): typia.Primitive<TagCustom> => {
                const $is_uuid = (typia.misc.isClone as any).is_uuid;
                const $is_custom = (typia.misc.isClone as any).is_custom;
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
        })(input),
    TagCustom.SPOILERS,
);
