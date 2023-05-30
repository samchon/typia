import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalArrayUnion } from "../../../structures/FunctionalArrayUnion";
export const test_equals_FunctionalArrayUnion = _test_equals("FunctionalArrayUnion", FunctionalArrayUnion.generate, (input) => ((input: any, _exceptionable: boolean = true): input is Array<FunctionalArrayUnion.Union> => {
    const $id0 = (input: any, _exceptionable: boolean = true): any => Array.isArray(input) && (() => {
        if (0 === input.length)
            return true;
        const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any, _index3: number) => "string" === typeof elem)], [(top: any) => "number" === typeof top && Number.isFinite(top), (top: any) => top.every((elem: any, _index3: number) => "number" === typeof elem && Number.isFinite(elem))], [(top: any) => "function" === typeof top, (top: any) => top.every((elem: any, _index3: number) => "function" === typeof elem)], [(top: any) => undefined !== top && null === top, (top: any) => top.every((elem: any, _index3: number) => undefined !== elem && null === elem)]];
        const front = input[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](input);
        const array = input;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any, _index1: number) => Array.isArray(elem) && (() => {
        if (0 === elem.length)
            return true;
        const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any, _index2: number) => "string" === typeof elem)], [(top: any) => "number" === typeof top && Number.isFinite(top), (top: any) => top.every((elem: any, _index2: number) => "number" === typeof elem && Number.isFinite(elem))], [(top: any) => "function" === typeof top, (top: any) => top.every((elem: any, _index2: number) => "function" === typeof elem)], [(top: any) => undefined !== top && null === top, (top: any) => top.every((elem: any, _index2: number) => undefined !== elem && null === elem)]];
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
    })() || $id0(elem, true));
})(input));
