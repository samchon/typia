import typia from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_MapAlias = _test_isClone("MapAlias", MapAlias.generate, (input: any): typia.Primitive<MapAlias> | null => { const is = (input: any): input is MapAlias => {
    const $io0 = (input: any) => input.boolean instanceof Map && [...input.boolean].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && "boolean" === typeof elem[0] && "number" === typeof elem[1])) && (input.number instanceof Map && [...input.number].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && "number" === typeof elem[0] && "number" === typeof elem[1]))) && (input.strings instanceof Map && [...input.strings].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && "string" === typeof elem[0] && "number" === typeof elem[1]))) && (input.arrays instanceof Map && [...input.arrays].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && (Array.isArray(elem[0]) && elem[0].every((elem: any) => "number" === typeof elem)) && "number" === typeof elem[1]))) && (input.objects instanceof Map && [...input.objects].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && ("object" === typeof elem[0] && null !== elem[0] && $io1(elem[0])) && "number" === typeof elem[1])));
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: MapAlias): typia.Primitive<MapAlias> => {
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $co0 = (input: any) => ({
        boolean: input.boolean instanceof Map ? {} : input.boolean,
        number: input.number instanceof Map ? {} : input.number,
        strings: input.strings instanceof Map ? {} : input.strings,
        arrays: input.arrays instanceof Map ? {} : input.arrays,
        objects: input.objects instanceof Map ? {} : input.objects
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, MapAlias.SPOILERS);
