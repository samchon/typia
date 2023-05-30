import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_createIsClone_AtomicSimple = _test_isClone("AtomicSimple", AtomicSimple.generate, (input: any): typia.Primitive<AtomicSimple> | null => { const is = (input: any): input is AtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && "string" === typeof input[2]);
}; const clone = (input: AtomicSimple): typia.Primitive<AtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]) ? [
        input[0] as any,
        input[1] as any,
        input[2] as any
    ] as any : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, AtomicSimple.SPOILERS);
