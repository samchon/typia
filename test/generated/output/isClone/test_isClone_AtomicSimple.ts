import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_AtomicSimple = _test_isClone("AtomicSimple", AtomicSimple.generate, (input) => ((input: any): typia.Primitive<AtomicSimple> | null => { const is = (input: any): input is AtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]);
}; const clone = (input: AtomicSimple): typia.Primitive<AtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]) ? [
        input[0],
        input[1],
        input[2]
    ] : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), AtomicSimple.SPOILERS);
