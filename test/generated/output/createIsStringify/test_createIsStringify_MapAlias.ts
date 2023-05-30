import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { MapAlias } from "../../../structures/MapAlias";
export const test_createIsStringify_MapAlias = _test_isStringify("MapAlias", MapAlias.generate, (input: MapAlias): string | null => { const is = (input: any): input is MapAlias => {
    const $io0 = (input: any): boolean => input.boolean instanceof Map && [...input.boolean].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && "boolean" === typeof elem[0] && ("number" === typeof elem[1] && Number.isFinite(elem[1])))) && (input.number instanceof Map && [...input.number].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && ("number" === typeof elem[0] && Number.isFinite(elem[0])) && ("number" === typeof elem[1] && Number.isFinite(elem[1]))))) && (input.strings instanceof Map && [...input.strings].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && "string" === typeof elem[0] && ("number" === typeof elem[1] && Number.isFinite(elem[1]))))) && (input.arrays instanceof Map && [...input.arrays].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && (Array.isArray(elem[0]) && elem[0].every((elem: any) => "number" === typeof elem && Number.isFinite(elem))) && ("number" === typeof elem[1] && Number.isFinite(elem[1]))))) && (input.objects instanceof Map && [...input.objects].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && ("object" === typeof elem[0] && null !== elem[0] && $io1(elem[0])) && ("number" === typeof elem[1] && Number.isFinite(elem[1])))));
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: MapAlias): string => {
    const $string = (typia.createIsStringify as any).string;
    const $number = (typia.createIsStringify as any).number;
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $so0 = (input: any): any => "{\"boolean\":{},\"number\":{},\"strings\":{},\"arrays\":{},\"objects\":{}}";
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, MapAlias.SPOILERS);
