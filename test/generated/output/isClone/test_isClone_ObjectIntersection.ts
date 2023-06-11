import typia from "../../../../src";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_isClone_ObjectIntersection = _test_isClone("ObjectIntersection", ObjectIntersection.generate, (input) => ((input: any): typia.Primitive<ObjectIntersection.IEmail & ObjectIntersection.IName> | null => { const is = (input: any): input is ObjectIntersection.IEmail & ObjectIntersection.IName => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).email && "string" === typeof (input as any).name && "boolean" === typeof (input as any).vulnerable);
}; const clone = (input: ObjectIntersection.IEmail & ObjectIntersection.IName): typia.Primitive<ObjectIntersection.IEmail & ObjectIntersection.IName> => {
    const $co0 = (input: any): any => ({
        email: input.email as any,
        name: input.name as any,
        vulnerable: input.vulnerable as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectIntersection.SPOILERS);
