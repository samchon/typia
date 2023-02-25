import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_AtomicAlias = _test_isStringify("AtomicAlias", AtomicAlias.generate, (input) => ((input: AtomicAlias): string | null => { const is = (input: any): input is AtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && !Number.isNaN(input[1])) && "string" === typeof input[2]);
}; const stringify = (input: AtomicAlias): string => {
    const $string = (typia.isStringify as any).string;
    return `[${input[0]},${input[1]},${$string(input[2])}]`;
}; return is(input) ? stringify(input) : null; })(input), AtomicAlias.SPOILERS);
