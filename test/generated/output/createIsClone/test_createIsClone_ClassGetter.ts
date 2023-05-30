import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ClassGetter } from "../../../structures/ClassGetter";
export const test_createIsClone_ClassGetter = _test_isClone("ClassGetter", ClassGetter.generate, (input: any): typia.Primitive<ClassGetter> | null => { const is = (input: any): input is ClassGetter => {
    const $io0 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && (null === input.dead || "boolean" === typeof input.dead);
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: ClassGetter): typia.Primitive<ClassGetter> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        dead: input.dead as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ClassGetter.SPOILERS);
