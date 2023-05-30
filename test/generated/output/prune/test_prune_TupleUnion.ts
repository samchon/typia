import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TupleUnion } from "../../../structures/TupleUnion";
export const test_prune_TupleUnion = _test_prune("TupleUnion", TupleUnion.generate, (input) => ((input: Array<TupleUnion.Union>): void => {
    const $id0 = (input: any): any => Array.isArray(input) && (() => {
        const tupleList = [[(top: any) => input.length === 3 && "number" === typeof input[0] && "string" === typeof input[1] && "boolean" === typeof input[2], (top: any) => top.length === 3 && "number" === typeof top[0] && "string" === typeof top[1] && "boolean" === typeof top[2]], [(top: any) => input.length === 2 && "boolean" === typeof input[0] && "number" === typeof input[1], (top: any) => top.length === 2 && "boolean" === typeof top[0] && "number" === typeof top[1]], [(top: any) => input.length === 0, (top: any) => top.length === 0]];
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
    const $pd0 = (input: any): any => { };
})(input));
