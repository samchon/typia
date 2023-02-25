import typia from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_FunctionalArrayUnion = _test_assert("FunctionalArrayUnion", FunctionalArrayUnion.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalArrayUnion => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Array<null> | Array<number> | Array<string> | Array<unknown>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Array<null> | Array<number> | Array<string> | Array<unknown>)",
            value: elem
        })) && (() => {
            if (0 === elem.length)
                return true;
            const tupleList = [[top => "string" === typeof top, top => top.every((elem: any, _index2: number) => "string" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "string",
                        value: elem
                    }))], [top => "number" === typeof top, top => top.every((elem: any, _index2: number) => "number" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "number",
                        value: elem
                    }))], [top => true, top => top.every((elem: any, _index2: number) => true || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "unknown",
                        value: elem
                    }))], [top => undefined !== top && null === top, top => top.every((elem: any, _index2: number) => (undefined !== elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "null",
                        value: elem
                    })) && (null === elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "null",
                        value: elem
                    })))]];
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
                expected: "(Array<string> | Array<number> | Array<unknown> | Array<null>)",
                value: elem
            });
        })());
    })(input, "$input", true);
    return input as FunctionalArrayUnion;
})(input), FunctionalArrayUnion.SPOILERS);
