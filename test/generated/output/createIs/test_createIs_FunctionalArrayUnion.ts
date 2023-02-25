import typia from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_is } from "../internal/_test_is";
export const test_createIs_FunctionalArrayUnion = _test_is("FunctionalArrayUnion", FunctionalArrayUnion.generate, (input: any): input is FunctionalArrayUnion => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && (() => {
        if (0 === elem.length)
            return true;
        const tupleList = [[top => "string" === typeof top, top => top.every((elem: any) => "string" === typeof elem)], [top => "number" === typeof top, top => top.every((elem: any) => "number" === typeof elem)], [top => true, top => top.every((elem: any) => true)], [top => undefined !== top && null === top, top => top.every((elem: any) => undefined !== elem && null === elem)]];
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
}, FunctionalArrayUnion.SPOILERS);
