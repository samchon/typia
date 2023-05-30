import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
export const test_createIsPrune_ConstantAtomicSimple = _test_isPrune("ConstantAtomicSimple", ConstantAtomicSimple.generate, (input: any): input is ConstantAtomicSimple => { const is = (input: any): input is ConstantAtomicSimple => {
    return Array.isArray(input) && (input.length === 4 && false === input[0] && true === input[1] && 2 === input[2] && "three" === input[3]);
}; const prune = (input: ConstantAtomicSimple): void => {
}; if (!is(input))
    return false; prune(input); return true; }, ConstantAtomicSimple.SPOILERS);
