import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ClassMethod = _test_isClone("ClassMethod", ClassMethod.generate, (input: any): typia.Primitive<Animal> | null => { const is = (input: any): input is Animal => {
    return "object" === typeof input && null !== input && ("string" === typeof input.name && "number" === typeof input.age);
}; const clone = (input: Animal): typia.Primitive<Animal> => {
    const $co0 = (input: any) => ({
        name: input.name,
        age: input.age
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ClassMethod.SPOILERS);
