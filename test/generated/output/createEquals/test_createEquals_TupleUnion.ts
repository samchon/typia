import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TupleUnion } from "../../../structures/TupleUnion";
export const test_createEquals_TupleUnion = _test_equals("TupleUnion", TupleUnion.generate, (input: any, _exceptionable: boolean = true): input is TupleUnion => {
    const $id0 = (input: any, _exceptionable: boolean = true): any => Array.isArray(input) && (() => {
        const tupleList = [[(top: any) => input.length === 3 && ("number" === typeof input[0] && Number.isFinite(input[0])) && "string" === typeof input[1] && "boolean" === typeof input[2], (top: any) => top.length === 3 && ("number" === typeof top[0] && Number.isFinite(top[0])) && "string" === typeof top[1] && "boolean" === typeof top[2]], [(top: any) => input.length === 2 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])), (top: any) => top.length === 2 && "boolean" === typeof top[0] && ("number" === typeof top[1] && Number.isFinite(top[1]))], [(top: any) => input.length === 0, (top: any) => top.length === 0]];
        const front = input;
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
        const tupleList = [[(top: any) => elem.length === 3 && ("number" === typeof elem[0] && Number.isFinite(elem[0])) && "string" === typeof elem[1] && "boolean" === typeof elem[2], (top: any) => top.length === 3 && ("number" === typeof top[0] && Number.isFinite(top[0])) && "string" === typeof top[1] && "boolean" === typeof top[2]], [(top: any) => elem.length === 2 && "boolean" === typeof elem[0] && ("number" === typeof elem[1] && Number.isFinite(elem[1])), (top: any) => top.length === 2 && "boolean" === typeof top[0] && ("number" === typeof top[1] && Number.isFinite(top[1]))], [(top: any) => elem.length === 0, (top: any) => top.length === 0]];
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
    })() || $id0(elem, true));
});
