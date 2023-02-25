import typia from "../../../src";
import { TupleUnion } from "../../structures/TupleUnion";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_TupleUnion = _test_isPrune("TupleUnion", TupleUnion.generate, (input) => ((input: any): input is TupleUnion => { const is = (input: any): input is TupleUnion => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && (() => {
        const tupleList = [[top => elem.length === 3 && "number" === typeof elem[0] && "string" === typeof elem[1] && "boolean" === typeof elem[2], top => top.length === 3 && "number" === typeof top[0] && "string" === typeof top[1] && "boolean" === typeof top[2]], [top => elem.length === 2 && "boolean" === typeof elem[0] && "number" === typeof elem[1], top => top.length === 2 && "boolean" === typeof top[0] && "number" === typeof top[1]], [top => elem.length === 0, top => top.length === 0]];
        const front = elem;
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
}; const prune = (input: TupleUnion): void => {
}; if (!is(input))
    return false; prune(input); return true; })(input), TupleUnion.SPOILERS);
