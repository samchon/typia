import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_ObjectPrimitive = _test_isPrune("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: any): input is Primitive<IArticle> => { const is = (input: any): input is Primitive<IArticle> => {
    return true;
}; const prune = (input: Primitive<IArticle>): void => {
}; if (!is(input))
    return false; prune(input); return true; })(input), ObjectPrimitive.SPOILERS);
