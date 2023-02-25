import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_assertPrune_ArrayUnion = _test_assertPrune("ArrayUnion", ArrayUnion.generate, (input) => ((input: any): ArrayUnion => { const assert = (input: any) => {
    const $guard = (typia.assertPrune as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayUnion => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Array<boolean> | Array<number> | Array<string>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Array<boolean> | Array<number> | Array<string>)",
            value: elem
        })) && (() => {
            if (0 === elem.length)
                return true;
            const tupleList = [[top => "string" === typeof top, top => top.every((elem: any, _index2: number) => "string" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "string",
                        value: elem
                    }))], [top => "boolean" === typeof top, top => top.every((elem: any, _index2: number) => "boolean" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "boolean",
                        value: elem
                    }))], [top => "number" === typeof top, top => top.every((elem: any, _index2: number) => "number" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "number",
                        value: elem
                    }))]];
            const front = elem[0];
            const filtered = tupleList.filter(tuple => true === tuple[0](front));
            if (1 === filtered.length)
                return filtered[0][1](elem);
            const array = elem;
            if (1 < filtered.length)
                for (const tuple of filtered)
                    if (array.every((value: any) => true === tuple[0](value)))
                        return tuple[1](array);
            return $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<string> | Array<boolean> | Array<number>)",
                value: elem
            });
        })());
    })(input, "$input", true);
    return input as ArrayUnion;
}; const prune = (input: ArrayUnion): void => {
}; assert(input); prune(input); return input; })(input), ArrayUnion.SPOILERS);
