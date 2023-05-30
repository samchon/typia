import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
export const test_createIsStringify_ArrayAtomicAlias = _test_isStringify("ArrayAtomicAlias", ArrayAtomicAlias.generate, (input: ArrayAtomicAlias): string | null => { const is = (input: any): input is ArrayAtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem && Number.isFinite(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem)));
}; const stringify = (input: ArrayAtomicAlias): string => {
    const $number = (typia.createIsStringify as any).number;
    const $string = (typia.createIsStringify as any).string;
    return `[${`[${input[0].map((elem: any) => elem).join(",")}]`},${`[${input[1].map((elem: any) => $number(elem)).join(",")}]`},${`[${input[2].map((elem: any) => $string(elem)).join(",")}]`}]`;
}; return is(input) ? stringify(input) : null; }, ArrayAtomicAlias.SPOILERS);
