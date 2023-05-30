import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_createIsPrune_AtomicSimple = _test_isPrune("AtomicSimple", AtomicSimple.generate, (input: any): input is AtomicSimple => { const is = (input: any): input is AtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && "string" === typeof input[2]);
}; const prune = (input: AtomicSimple): void => {
}; if (!is(input))
    return false; prune(input); return true; }, AtomicSimple.SPOILERS);
