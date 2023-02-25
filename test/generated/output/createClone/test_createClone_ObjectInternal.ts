import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ObjectInternal = _test_clone("ObjectInternal", ObjectInternal.generate, (input: ObjectInternal): typia.Primitive<ObjectInternal> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
