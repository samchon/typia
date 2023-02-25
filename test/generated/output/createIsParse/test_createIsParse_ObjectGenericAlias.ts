import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_ObjectGenericAlias = _test_isParse("ObjectGenericAlias", ObjectGenericAlias.generate, (input: any): typia.Primitive<Alias> => { const is = (input: any): input is Alias => {
    return "object" === typeof input && null !== input && "string" === typeof input.value;
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectGenericAlias.SPOILERS);
