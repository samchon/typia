import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ClassGetter = _test_isClone("ClassGetter", ClassGetter.generate, (input: any): typia.Primitive<Person> | null => { const is = (input: any): input is Person => {
    return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name && "boolean" === typeof input.dead);
}; const clone = (input: Person): typia.Primitive<Person> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        dead: input.dead
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ClassGetter.SPOILERS);
