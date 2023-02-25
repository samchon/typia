import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_AtomicUnion = _test_isParse("AtomicUnion", AtomicUnion.generate, (input: any): typia.Primitive<AtomicUnion> => { const is = (input: any): input is AtomicUnion => {
    return Array.isArray(input) && input.every((elem: any) => "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, AtomicUnion.SPOILERS);
