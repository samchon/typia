import typia from "../../../../src";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_isParse } from "../../../internal/_test_isParse";
export const test_isParse_ObjectGenericAlias = _test_isParse("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: any): typia.Primitive<ObjectGenericAlias> => { const is = (input: any): input is ObjectGenericAlias => {
    return "object" === typeof input && null !== input && "string" === typeof (input as any).value;
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), ObjectGenericAlias.SPOILERS);
