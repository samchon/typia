import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ObjectPrimitive = _test_isClone("ObjectPrimitive", ObjectPrimitive.generate, (input: any): typia.Primitive<Primitive<IArticle>> | null => { const is = (input: any): input is Primitive<IArticle> => {
    return true;
}; const clone = (input: Primitive<IArticle>): typia.Primitive<Primitive<IArticle>> => {
    const $any = (typia.createIsClone as any).any;
    return $any(input);
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectPrimitive.SPOILERS);
