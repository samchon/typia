import typia from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_MapSimple = _test_isStringify("MapSimple", MapSimple.generate, (input) => ((input: MapSimple): string | null => { const is = (input: any): input is MapSimple => {
    const $io0 = (input: any) => input.boolean instanceof Map && [...input.boolean].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && "boolean" === typeof elem[0] && ("number" === typeof elem[1] && !Number.isNaN(elem[1])))) && (input.number instanceof Map && [...input.number].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && ("number" === typeof elem[0] && !Number.isNaN(elem[0])) && ("number" === typeof elem[1] && !Number.isNaN(elem[1]))))) && (input.strings instanceof Map && [...input.strings].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && "string" === typeof elem[0] && ("number" === typeof elem[1] && !Number.isNaN(elem[1]))))) && (input.arrays instanceof Map && [...input.arrays].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && (Array.isArray(elem[0]) && elem[0].every((elem: any) => "number" === typeof elem && !Number.isNaN(elem))) && ("number" === typeof elem[1] && !Number.isNaN(elem[1]))))) && (input.objects instanceof Map && [...input.objects].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && ("object" === typeof elem[0] && null !== elem[0] && $io1(elem[0])) && ("number" === typeof elem[1] && !Number.isNaN(elem[1])))));
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && !Number.isNaN(input.age));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: MapSimple): string => {
    const $string = (typia.isStringify as any).string;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $so0 = (input: any) => "{\"boolean\":{},\"number\":{},\"strings\":{},\"arrays\":{},\"objects\":{}}";
    return $so0(input);
}; return is(input) ? stringify(input) : null; })(input), MapSimple.SPOILERS);
