import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ObjectIntersection = _test_isClone("ObjectIntersection", ObjectIntersection.generate, (input) => ((input: any): typia.Primitive<ObjectIntersection> | null => { const is = (input: any): input is ObjectIntersection => {
    return "object" === typeof input && null !== input && ("string" === typeof input.email && "string" === typeof input.name && "boolean" === typeof input.vulnerable);
}; const clone = (input: ObjectIntersection): typia.Primitive<ObjectIntersection> => {
    const $co0 = (input: any) => ({
        email: input.email,
        name: input.name,
        vulnerable: input.vulnerable
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectIntersection.SPOILERS);
