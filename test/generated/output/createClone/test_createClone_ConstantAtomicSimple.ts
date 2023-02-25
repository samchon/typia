import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ConstantAtomicSimple = _test_clone("ConstantAtomicSimple", ConstantAtomicSimple.generate, (input: ConstantAtomicSimple): typia.Primitive<ConstantAtomicSimple> => {
    return Array.isArray(input) && (input.length === 4 && false === input[0] && true === input[1] && 2 === input[2] && "three" === input[3]) ? [
        input[0],
        input[1],
        input[2],
        input[3]
    ] : input;
});
