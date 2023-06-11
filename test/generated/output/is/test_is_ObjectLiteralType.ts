import typia from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_is } from "../../../internal/_test_is";
export const test_is_ObjectLiteralType = _test_is("ObjectLiteralType", ObjectLiteralType.generate, (input) => ((input: any): input is {    id: string;    name: string;    age: number;} => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && "string" === typeof (input as any).name && ("number" === typeof (input as any).age && Number.isFinite((input as any).age)));
})(input), ObjectLiteralType.SPOILERS);
