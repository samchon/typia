import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { AtomicAlias } from "../../../structures/AtomicAlias";
export const test_createIsStringify_AtomicAlias = _test_isStringify("AtomicAlias", AtomicAlias.generate, (input: AtomicAlias): string | null => { const is = (input: any): input is AtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && "string" === typeof input[2]);
}; const stringify = (input: AtomicAlias): string => {
    const $number = (typia.createIsStringify as any).number;
    const $string = (typia.createIsStringify as any).string;
    return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
}; return is(input) ? stringify(input) : null; }, AtomicAlias.SPOILERS);
