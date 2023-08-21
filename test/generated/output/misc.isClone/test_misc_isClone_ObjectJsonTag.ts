import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_misc_isClone_ObjectJsonTag = _test_misc_isClone(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
    ((input: any): typia.Primitive<ObjectJsonTag> | null => {
        const is = (input: any): input is ObjectJsonTag => {
            const $is_custom = (typia.misc.isClone as any).is_custom;
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).vulnerable &&
                $is_custom(
                    "deprecated",
                    "string",
                    "",
                    (input as any).vulnerable,
                ) &&
                "string" === typeof (input as any).description &&
                "string" === typeof (input as any).title &&
                $is_custom(
                    "title",
                    "string",
                    "something",
                    (input as any).title,
                ) &&
                "string" === typeof (input as any).complicate_title
            );
        };
        const clone = (
            input: ObjectJsonTag,
        ): typia.Primitive<ObjectJsonTag> => {
            const $is_custom = (typia.misc.isClone as any).is_custom;
            const $co0 = (input: any): any => ({
                vulnerable: input.vulnerable as any,
                description: input.description as any,
                title: input.title as any,
                complicate_title: input.complicate_title as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    })(input),
);
