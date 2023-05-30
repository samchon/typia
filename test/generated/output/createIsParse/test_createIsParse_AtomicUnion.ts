import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_createIsParse_AtomicUnion = _test_isParse("AtomicUnion", AtomicUnion.generate, (input: any): typia.Primitive<AtomicUnion> => { const is = (input: any): input is AtomicUnion => {
    return Array.isArray(input) && input.every((elem: any) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, AtomicUnion.SPOILERS);
