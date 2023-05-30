import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_createIsParse_ObjectGenericAlias = _test_isParse("ObjectGenericAlias", ObjectGenericAlias.generate, (input: any): typia.Primitive<ObjectGenericAlias> => { const is = (input: any): input is ObjectGenericAlias => {
    return "object" === typeof input && null !== input && "string" === typeof input.value;
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectGenericAlias.SPOILERS);
