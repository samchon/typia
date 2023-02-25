import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ObjectIntersection = _test_clone("ObjectIntersection", ObjectIntersection.generate, (input: ObjectIntersection): typia.Primitive<ObjectIntersection> => {
    const $co0 = (input: any) => ({
        email: input.email,
        name: input.name,
        vulnerable: input.vulnerable
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
