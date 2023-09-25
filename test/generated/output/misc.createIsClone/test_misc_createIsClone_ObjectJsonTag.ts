import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_misc_createIsClone_ObjectJsonTag = _test_misc_isClone(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(
    (input: any): typia.Resolved<ObjectJsonTag> | null => {
        const is = (input: any): input is ObjectJsonTag => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).vulnerable &&
                "string" === typeof (input as any).description &&
                "string" === typeof (input as any).title &&
                "string" === typeof (input as any).complicate_title
            );
        };
        const clone = (input: ObjectJsonTag): typia.Resolved<ObjectJsonTag> => {
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
    },
);
