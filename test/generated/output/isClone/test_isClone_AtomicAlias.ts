import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_AtomicAlias = _test_isClone("AtomicAlias", AtomicAlias.generate, (input) => ((input: any): typia.Primitive<AtomicAlias> | null => { const is = (input: any): input is AtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]);
}; const clone = (input: AtomicAlias): typia.Primitive<AtomicAlias> => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]) ? [
        input[0],
        input[1],
        input[2]
    ] : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), AtomicAlias.SPOILERS);
