import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
export const test_createClone_ObjectIntersection = _test_clone("ObjectIntersection", ObjectIntersection.generate, (input: ObjectIntersection): typia.Primitive<ObjectIntersection> => {
    const $co0 = (input: any): any => ({
        email: input.email as any,
        name: input.name as any,
        vulnerable: input.vulnerable as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
