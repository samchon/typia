import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ArrayUnion = _test_isStringify("ArrayUnion", ArrayUnion.generate, (input: ArrayUnion): string | null => { const is = (input: any): input is ArrayUnion => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && (() => {
        if (0 === elem.length)
            return true;
        const tupleList = [[top => "string" === typeof top, top => top.every((elem: any) => "string" === typeof elem)], [top => "boolean" === typeof top, top => top.every((elem: any) => "boolean" === typeof elem)], [top => "number" === typeof top && !Number.isNaN(top), top => top.every((elem: any) => "number" === typeof elem && !Number.isNaN(elem))]];
        const front = elem[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](elem);
        const array = elem;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        return false;
    })());
}; const stringify = (input: ArrayUnion): string => {
    const $string = (typia.createIsStringify as any).string;
    const $throws = (typia.createIsStringify as any).throws;
    return `[${input.map((elem: any) => (() => {
        if (0 === elem.length)
            return "[]";
        const tupleList = [[top => "string" === typeof top, top => `[${top.map((elem: any) => $string(elem)).join(",")}]`], [top => "boolean" === typeof top, top => `[${top.map((elem: any) => elem).join(",")}]`], [top => "number" === typeof top, top => `[${top.map((elem: any) => elem).join(",")}]`]];
        const front = elem[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](elem);
        const array = elem;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        $throws({
            expected: "(Array<string> | Array<boolean> | Array<number>)",
            value: elem
        });
    })()).join(",")}]`;
}; return is(input) ? stringify(input) : null; }, ArrayUnion.SPOILERS);
