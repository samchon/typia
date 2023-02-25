import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ClassMethod = _test_clone("ClassMethod", ClassMethod.generate, (input: Animal): typia.Primitive<Animal> => {
    const $co0 = (input: any) => ({
        name: input.name,
        age: input.age
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
