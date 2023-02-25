import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ConstantAtomicUnion = _test_clone("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: ConstantAtomicUnion): typia.Primitive<ConstantAtomicUnion> => {
    const $co0 = (input: any) => ({
        key: input.key
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
})(input));
