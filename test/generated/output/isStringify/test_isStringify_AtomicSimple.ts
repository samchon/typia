import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_isStringify_AtomicSimple = _test_isStringify("AtomicSimple", AtomicSimple.generate, (input) => ((input: [boolean, number, string]): string | null => { const is = (input: any): input is [boolean, number, string] => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && "string" === typeof input[2]);
}; const stringify = (input: [boolean, number, string]): string => {
    const $number = (typia.isStringify as any).number;
    const $string = (typia.isStringify as any).string;
    return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
}; return is(input) ? stringify(input) : null; })(input), AtomicSimple.SPOILERS);
