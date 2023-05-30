import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
export const test_clone_ConstantAtomicSimple = _test_clone("ConstantAtomicSimple", ConstantAtomicSimple.generate, (input) => ((input: [false, true, 2, 'three']): typia.Primitive<[false, true, 2, 'three']> => {
    return Array.isArray(input) && (input.length === 4 && false === input[0] && true === input[1] && 2 === input[2] && "three" === input[3]) ? [
        input[0] as any,
        input[1] as any,
        input[2] as any,
        input[3] as any
    ] as any : input as any;
})(input));
