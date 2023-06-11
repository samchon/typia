import typia from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_is } from "../../../internal/_test_is";
export const test_createIs_ObjectLiteralType = _test_is("ObjectLiteralType", ObjectLiteralType.generate, (input: any): input is ObjectLiteralType => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && "string" === typeof (input as any).name && ("number" === typeof (input as any).age && Number.isFinite((input as any).age)));
}, ObjectLiteralType.SPOILERS);
