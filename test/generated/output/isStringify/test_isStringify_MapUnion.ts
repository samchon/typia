import typia from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_MapUnion = _test_isStringify("MapUnion", MapUnion.generate, (input) => ((input: MapUnion): string | null => { const is = (input: any): input is MapUnion => {
    const $io0 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && !Number.isNaN(input.age));
    return Array.isArray(input) && input.every((elem: any) => elem instanceof Map && (() => {
        if (0 === elem.size)
            return true;
        const tupleList = [[top => "boolean" === typeof top[0] && ("number" === typeof top[1] && !Number.isNaN(top[1])), top => top.every((elem: any) => Array.isArray(elem) && (elem.length === 2 && "boolean" === typeof elem[0] && ("number" === typeof elem[1] && !Number.isNaN(elem[1]))))], [top => "number" === typeof top[0] && !Number.isNaN(top[0]) && ("number" === typeof top[1] && !Number.isNaN(top[1])), top => top.every((elem: any) => Array.isArray(elem) && (elem.length === 2 && ("number" === typeof elem[0] && !Number.isNaN(elem[0])) && ("number" === typeof elem[1] && !Number.isNaN(elem[1]))))], [top => "string" === typeof top[0] && ("number" === typeof top[1] && !Number.isNaN(top[1])), top => top.every((elem: any) => Array.isArray(elem) && (elem.length === 2 && "string" === typeof elem[0] && ("number" === typeof elem[1] && !Number.isNaN(elem[1]))))], [top => Array.isArray(top[0]) && top[0].every((elem: any) => "number" === typeof elem && !Number.isNaN(elem)) && ("number" === typeof top[1] && !Number.isNaN(top[1])), top => top.every((elem: any) => Array.isArray(elem) && (elem.length === 2 && (Array.isArray(elem[0]) && elem[0].every((elem: any) => "number" === typeof elem && !Number.isNaN(elem))) && ("number" === typeof elem[1] && !Number.isNaN(elem[1]))))], [top => "object" === typeof top[0] && null !== top[0] && $io0(top[0]) && ("number" === typeof top[1] && !Number.isNaN(top[1])), top => top.every((elem: any) => Array.isArray(elem) && (elem.length === 2 && ("object" === typeof elem[0] && null !== elem[0] && $io0(elem[0])) && ("number" === typeof elem[1] && !Number.isNaN(elem[1]))))]];
        const front = elem.entries().next().value;
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1]([...elem]);
        const array = [...elem];
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        return false;
    })());
}; const stringify = (input: MapUnion): string => {
    const $string = (typia.isStringify as any).string;
    return `[${input.map((elem: any) => "{}").join(",")}]`;
}; return is(input) ? stringify(input) : null; })(input), MapUnion.SPOILERS);
