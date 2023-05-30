import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_createIsPrune_AtomicUnion = _test_isPrune("AtomicUnion", AtomicUnion.generate, (input: any): input is AtomicUnion => { const is = (input: any): input is AtomicUnion => {
    return Array.isArray(input) && input.every((elem: any) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem);
}; const prune = (input: AtomicUnion): void => {
}; if (!is(input))
    return false; prune(input); return true; }, AtomicUnion.SPOILERS);
