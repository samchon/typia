import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ArraySimple = _test_clone("ArraySimple", ArraySimple.generate, (input) => ((input: ArraySimple): typia.Primitive<ArraySimple> => {
    const $io1 = (input: any) => "string" === typeof input.name && "string" === typeof input.body && "number" === typeof input.rank;
    const $co0 = (input: any) => ({
        name: input.name,
        email: input.email,
        hobbies: Array.isArray(input.hobbies) ? input.hobbies.map((elem: any) => "object" === typeof elem && null !== elem ? $co1(elem) : elem) : input.hobbies
    });
    const $co1 = (input: any) => ({
        name: input.name,
        body: input.body,
        rank: input.rank
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
})(input));
