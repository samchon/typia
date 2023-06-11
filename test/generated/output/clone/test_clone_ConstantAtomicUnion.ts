import typia from "../../../../src";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_clone } from "../../../internal/_test_clone";
export const test_clone_ConstantAtomicUnion = _test_clone("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: Array<ConstantAtomicUnion.Union>): typia.Primitive<Array<ConstantAtomicUnion.Union>> => {
    const $cp0 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any);
    const $co0 = (input: any): any => ({
        key: input.key as any
    });
    return Array.isArray(input) ? $cp0(input) : input as any;
})(input));
