import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ArrayUnion = _test_assertStringify("ArrayUnion", ArrayUnion.generate, (input: ArrayUnion): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
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
                    }))], [top => "number" === typeof top && !Number.isNaN(top), top => top.every((elem: any, _index2: number) => "number" === typeof elem && !Number.isNaN(elem) || $guard(true, {
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
}; const stringify = (input: ArrayUnion): string => {
    const $string = (typia.createAssertStringify as any).string;
    const $throws = (typia.createAssertStringify as any).throws;
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
}; return stringify(assert(input)); }, ArrayUnion.SPOILERS);
