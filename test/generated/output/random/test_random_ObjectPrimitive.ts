import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_random } from "../internal/_test_random";
export const test_random_ObjectPrimitive = _test_random("ObjectPrimitive", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    return "fucking any type exists...";
})(), (input: any) => {
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    return input as typia.Primitive<ObjectPrimitive>;
});
