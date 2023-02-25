import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_ObjectInternal = _test_isParse("ObjectInternal", ObjectInternal.generate, (input: any): typia.Primitive<ObjectInternal> => { const is = (input: any): input is ObjectInternal => {
    return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectInternal.SPOILERS);
