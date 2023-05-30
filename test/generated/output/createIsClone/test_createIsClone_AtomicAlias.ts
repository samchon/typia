import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { AtomicAlias } from "../../../structures/AtomicAlias";
export const test_createIsClone_AtomicAlias = _test_isClone("AtomicAlias", AtomicAlias.generate, (input: any): typia.Primitive<AtomicAlias> | null => { const is = (input: any): input is AtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && "string" === typeof input[2]);
}; const clone = (input: AtomicAlias): typia.Primitive<AtomicAlias> => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]) ? [
        input[0] as any,
        input[1] as any,
        input[2] as any
    ] as any : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, AtomicAlias.SPOILERS);
