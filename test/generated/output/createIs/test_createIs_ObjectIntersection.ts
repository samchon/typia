import typia from "../../../../src";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_is } from "../../../internal/_test_is";
export const test_createIs_ObjectIntersection = _test_is("ObjectIntersection", ObjectIntersection.generate, (input: any): input is ObjectIntersection => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).email && "string" === typeof (input as any).name && "boolean" === typeof (input as any).vulnerable);
}, ObjectIntersection.SPOILERS);
