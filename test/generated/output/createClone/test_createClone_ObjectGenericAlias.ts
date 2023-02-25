import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ObjectGenericAlias = _test_clone("ObjectGenericAlias", ObjectGenericAlias.generate, (input: Alias): typia.Primitive<Alias> => {
    const $co0 = (input: any) => ({
        value: input.value
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
