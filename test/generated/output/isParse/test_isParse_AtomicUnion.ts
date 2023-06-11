import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_isParse } from "../../../internal/_test_isParse";
export const test_isParse_AtomicUnion = _test_isParse("AtomicUnion", AtomicUnion.generate, (input) => ((input: any): typia.Primitive<AtomicUnion> => { const is = (input: any): input is AtomicUnion => {
    return Array.isArray(input) && input.every((elem: any) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem);
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), AtomicUnion.SPOILERS);
