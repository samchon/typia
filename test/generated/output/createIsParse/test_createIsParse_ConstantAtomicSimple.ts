import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
export const test_createIsParse_ConstantAtomicSimple = _test_isParse("ConstantAtomicSimple", ConstantAtomicSimple.generate, (input: any): typia.Primitive<ConstantAtomicSimple> => { const is = (input: any): input is ConstantAtomicSimple => {
    return Array.isArray(input) && (input.length === 4 && false === input[0] && true === input[1] && 2 === input[2] && "three" === input[3]);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ConstantAtomicSimple.SPOILERS);
