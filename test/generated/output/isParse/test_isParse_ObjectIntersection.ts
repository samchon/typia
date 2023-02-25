import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_ObjectIntersection = _test_isParse("ObjectIntersection", ObjectIntersection.generate, (input) => ((input: any): typia.Primitive<ObjectIntersection> => { const is = (input: any): input is ObjectIntersection => {
    return "object" === typeof input && null !== input && ("string" === typeof input.email && "string" === typeof input.name && "boolean" === typeof input.vulnerable);
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), ObjectIntersection.SPOILERS);
