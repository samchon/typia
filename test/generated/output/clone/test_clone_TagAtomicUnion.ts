import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TagAtomicUnion = _test_clone("TagAtomicUnion", TagAtomicUnion.generate, (input) => ((input: TagAtomicUnion): typia.Primitive<TagAtomicUnion> => {
    const $co0 = (input: any) => ({
        value: input.value
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
})(input));
