import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_createClone_ObjectGenericAlias = _test_clone("ObjectGenericAlias", ObjectGenericAlias.generate, (input: ObjectGenericAlias): typia.Primitive<ObjectGenericAlias> => {
    const $co0 = (input: any): any => ({
        value: input.value as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
