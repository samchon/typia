import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ObjectPrimitive = _test_assertClone("ObjectPrimitive", ObjectPrimitive.generate, (input: any): typia.Primitive<Primitive<IArticle>> => { const assert = (input: any) => {
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    return input as Primitive<IArticle>;
}; const clone = (input: Primitive<IArticle>): typia.Primitive<Primitive<IArticle>> => {
    const $any = (typia.createAssertClone as any).any;
    return $any(input);
}; assert(input); const output = clone(input); /* __type<ObjectPrimitive.IArticle> */; return output as Primitive<IArticle>; }, ObjectPrimitive.SPOILERS);
