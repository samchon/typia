import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ArrayUnion = _test_isClone("ArrayUnion", ArrayUnion.generate, (input) => ((input: any): typia.Primitive<ArrayUnion> | null => { const is = (input: any): input is ArrayUnion => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && (() => {
        if (0 === elem.length)
            return true;
        const tupleList = [[top => "string" === typeof top, top => top.every((elem: any) => "string" === typeof elem)], [top => "boolean" === typeof top, top => top.every((elem: any) => "boolean" === typeof elem)], [top => "number" === typeof top, top => top.every((elem: any) => "number" === typeof elem)]];
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
}; const clone = (input: ArrayUnion): typia.Primitive<ArrayUnion> => {
    const $throws = (typia.isClone as any).throws;
    return Array.isArray(input) ? input.map((elem: any) => Array.isArray(elem) ? (() => {
        if (0 === elem.length)
            return;
        const tupleList = [[top => "string" === typeof top, top => top.map((elem: any) => elem)], [top => "boolean" === typeof top, top => top.map((elem: any) => elem)], [top => "number" === typeof top, top => top.map((elem: any) => elem)]];
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
    })() : elem) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ArrayUnion.SPOILERS);
