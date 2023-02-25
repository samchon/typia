import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_ObjectRecursive = _test_isParse("ObjectRecursive", ObjectRecursive.generate, (input: any): typia.Primitive<IDepartment> => { const is = (input: any): input is IDepartment => {
    const $io0 = (input: any) => "object" === typeof input.parent && null !== input.parent && $io0(input.parent) && "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && "number" === typeof input.created_at.zone));
    return "object" === typeof input && null !== input && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectRecursive.SPOILERS);
