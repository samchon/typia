import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_misc_clone_ObjectJsonTag = _test_misc_clone(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(
    (input: ObjectJsonTag): typia.Resolved<ObjectJsonTag> => {
        const $is_custom = (typia.misc.createClone as any).is_custom;
        const $co0 = (input: any): any => ({
            vulnerable: input.vulnerable as any,
            description: input.description as any,
            title: input.title as any,
            complicate_title: input.complicate_title as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
