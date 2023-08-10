import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_misc_clone_ObjectInternal = _test_misc_clone<ObjectInternal>(
    ObjectInternal,
)((input: ObjectInternal): typia.Primitive<ObjectInternal> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
    });
    return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
});
