import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_createIsParse_AtomicSimple = _test_isParse("AtomicSimple", AtomicSimple.generate, (input: any): typia.Primitive<AtomicSimple> => { const is = (input: any): input is AtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && "string" === typeof input[2]);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, AtomicSimple.SPOILERS);
