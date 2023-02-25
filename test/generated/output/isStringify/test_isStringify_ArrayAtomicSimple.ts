import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ArrayAtomicSimple = _test_isStringify("ArrayAtomicSimple", ArrayAtomicSimple.generate, (input) => ((input: ArrayAtomicSimple): string | null => { const is = (input: any): input is ArrayAtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem && !Number.isNaN(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem)));
}; const stringify = (input: ArrayAtomicSimple): string => {
    const $string = (typia.isStringify as any).string;
    return `[${`[${input[0].map((elem: any) => elem).join(",")}]`},${`[${input[1].map((elem: any) => elem).join(",")}]`},${`[${input[2].map((elem: any) => $string(elem)).join(",")}]`}]`;
}; return is(input) ? stringify(input) : null; })(input), ArrayAtomicSimple.SPOILERS);
