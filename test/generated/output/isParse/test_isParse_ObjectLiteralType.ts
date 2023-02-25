import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_ObjectLiteralType = _test_isParse("ObjectLiteralType", ObjectLiteralType.generate, (input) => ((input: any): typia.Primitive<{ id: string; name: string; age: number; }> => { const is = (input: any): input is { id: string; name: string; age: number; } => {
    return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age);
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), ObjectLiteralType.SPOILERS);
