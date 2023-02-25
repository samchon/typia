import typia from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_FunctionalArrayUnion = _test_equals("FunctionalArrayUnion", FunctionalArrayUnion.generate, (input) => ((input: any, _exceptionable: boolean): input is FunctionalArrayUnion => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => Array.isArray(elem) && (() => {
        if (0 === elem.length)
            return true;
        const tupleList = [[top => "string" === typeof top, top => top.every((elem: any, _index2: number) => "string" === typeof elem)], [top => "number" === typeof top, top => top.every((elem: any, _index2: number) => "number" === typeof elem)], [top => true, top => top.every((elem: any, _index2: number) => true)], [top => undefined !== top && null === top, top => top.every((elem: any, _index2: number) => undefined !== elem && null === elem)]];
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
})(input));
