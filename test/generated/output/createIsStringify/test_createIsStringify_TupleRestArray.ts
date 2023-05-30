import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TupleRestArray } from "../../../structures/TupleRestArray";
export const test_createIsStringify_TupleRestArray = _test_isStringify("TupleRestArray", TupleRestArray.generate, (input: TupleRestArray): string | null => { const is = (input: any): input is TupleRestArray => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "string" === typeof elem))));
}; const stringify = (input: TupleRestArray): string => {
    const $number = (typia.createIsStringify as any).number;
    const $string = (typia.createIsStringify as any).string;
    const $rest = (typia.createIsStringify as any).rest;
    return `[${input[0]},${$number(input[1])}${$rest(`[${input.slice(2).map((elem: any) => `[${elem.map((elem: any) => $string(elem)).join(",")}]`).join(",")}]`)}]`;
}; return is(input) ? stringify(input) : null; }, TupleRestArray.SPOILERS);
