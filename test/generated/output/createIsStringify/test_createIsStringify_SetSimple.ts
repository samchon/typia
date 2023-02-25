import typia from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_SetSimple = _test_isStringify("SetSimple", SetSimple.generate, (input: SetSimple): string | null => { const is = (input: any): input is SetSimple => {
    const $io0 = (input: any) => input.booleans instanceof Set && [...input.booleans].every((elem: any) => "boolean" === typeof elem) && (input.numbers instanceof Set && [...input.numbers].every((elem: any) => "number" === typeof elem && !Number.isNaN(elem))) && (input.strings instanceof Set && [...input.strings].every((elem: any) => "string" === typeof elem)) && (input.arrays instanceof Set && [...input.arrays].every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && !Number.isNaN(elem)))) && (input.objects instanceof Set && [...input.objects].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && !Number.isNaN(input.age));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: SetSimple): string => {
    const $string = (typia.createIsStringify as any).string;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $so0 = (input: any) => "{\"booleans\":{},\"numbers\":{},\"strings\":{},\"arrays\":{},\"objects\":{}}";
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, SetSimple.SPOILERS);
