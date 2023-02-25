import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_createAssertPrune_ObjectPrimitive = _test_assertPrune("ObjectPrimitive", ObjectPrimitive.generate, (input: any): Primitive<IArticle> => { const assert = (input: any) => {
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    return input as Primitive<IArticle>;
}; const prune = (input: Primitive<IArticle>): void => {
}; assert(input); prune(input); return input; }, ObjectPrimitive.SPOILERS);
