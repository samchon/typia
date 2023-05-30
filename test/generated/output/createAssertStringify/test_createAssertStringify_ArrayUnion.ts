import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ArrayUnion } from "../../../structures/ArrayUnion";
export const test_createAssertStringify_ArrayUnion = _test_assertStringify("ArrayUnion", ArrayUnion.generate, (input: any): string => { const assert = (input: any): ArrayUnion => {
    const $guard = (typia.createAssertStringify as any).guard;
    const __is = (input: any): input is ArrayUnion => {
        const $id0 = (input: any): any => Array.isArray(input) && (() => {
            if (0 === input.length)
                return true;
            const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any) => "string" === typeof elem)], [(top: any) => "boolean" === typeof top, (top: any) => top.every((elem: any) => "boolean" === typeof elem)], [(top: any) => "number" === typeof top && Number.isFinite(top), (top: any) => top.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))]];
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
        return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && (() => {
            if (0 === elem.length)
                return true;
            const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any) => "string" === typeof elem)], [(top: any) => "boolean" === typeof top, (top: any) => top.every((elem: any) => "boolean" === typeof elem)], [(top: any) => "number" === typeof top && Number.isFinite(top), (top: any) => top.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))]];
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
        })() || $id0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ArrayUnion => {
            const $ad0 = (input: any, _path: string, _exceptionable: boolean = true): any => (Array.isArray(input) || $guard(_exceptionable, {
                path: _path,
                expected: "(Array<boolean> | Array<number> | Array<string>)",
                value: input
            })) && (() => {
                if (0 === input.length)
                    return true;
                const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any, _index3: number) => "string" === typeof elem || $guard(_exceptionable, {
                            path: _path + "[" + _index3 + "]",
                            expected: "string",
                            value: elem
                        }))], [(top: any) => "boolean" === typeof top, (top: any) => top.every((elem: any, _index3: number) => "boolean" === typeof elem || $guard(_exceptionable, {
                            path: _path + "[" + _index3 + "]",
                            expected: "boolean",
                            value: elem
                        }))], [(top: any) => "number" === typeof top && Number.isFinite(top), (top: any) => top.every((elem: any, _index3: number) => "number" === typeof elem && Number.isFinite(elem) || $guard(_exceptionable, {
                            path: _path + "[" + _index3 + "]",
                            expected: "number",
                            value: elem
                        }))]];
                const front = input[0];
                const filtered = tupleList.filter(tuple => true === tuple[0](front));
                if (1 === filtered.length)
                    return filtered[0][1](input);
                const array = input;
                if (1 < filtered.length)
                    for (const tuple of filtered)
                        if (array.every((value: any) => true === tuple[0](value)))
                            return tuple[1](array);
                return $guard(_exceptionable, {
                    path: _path,
                    expected: "(Array<string> | Array<boolean> | Array<number>)",
                    value: input
                });
            })();
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "Array<ArrayUnion.IUnion>",
                value: input
            })) && input.every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<boolean> | Array<number> | Array<string> | ArrayUnion.IUnion)",
                value: elem
            })) && (() => {
                if (0 === elem.length)
                    return true;
                const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any, _index2: number) => "string" === typeof elem || $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index2 + "]",
                            expected: "string",
                            value: elem
                        }))], [(top: any) => "boolean" === typeof top, (top: any) => top.every((elem: any, _index2: number) => "boolean" === typeof elem || $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index2 + "]",
                            expected: "boolean",
                            value: elem
                        }))], [(top: any) => "number" === typeof top && Number.isFinite(top), (top: any) => top.every((elem: any, _index2: number) => "number" === typeof elem && Number.isFinite(elem) || $guard(true, {
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
            })() || $ad0(elem, _path + "[" + _index1 + "]", true));
        })(input, "$input", true);
    return input;
}; const stringify = (input: ArrayUnion): string => {
    const $string = (typia.createAssertStringify as any).string;
    const $number = (typia.createAssertStringify as any).number;
    const $throws = (typia.createAssertStringify as any).throws;
    const $id0 = (input: any): any => Array.isArray(input) && (() => {
        if (0 === input.length)
            return true;
        const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any) => "string" === typeof elem)], [(top: any) => "boolean" === typeof top, (top: any) => top.every((elem: any) => "boolean" === typeof elem)], [(top: any) => "number" === typeof top, (top: any) => top.every((elem: any) => "number" === typeof elem)]];
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
    const $sd0 = (input: any): any => (() => {
        if (0 === input.length)
            return "[]";
        const tupleList = [[(top: any) => "string" === typeof top, (top: any) => `[${top.map((elem: any) => $string(elem)).join(",")}]`], [(top: any) => "boolean" === typeof top, (top: any) => `[${top.map((elem: any) => elem).join(",")}]`], [(top: any) => "number" === typeof top, (top: any) => `[${top.map((elem: any) => $number(elem)).join(",")}]`]];
        const front = input[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](input);
        const array = input;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        $throws({
            expected: "(Array<string> | Array<boolean> | Array<number>)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => (() => {
        if (Array.isArray(elem))
            return (() => {
                if (0 === elem.length)
                    return "[]";
                const tupleList = [[(top: any) => "string" === typeof top, (top: any) => `[${top.map((elem: any) => $string(elem)).join(",")}]`], [(top: any) => "boolean" === typeof top, (top: any) => `[${top.map((elem: any) => elem).join(",")}]`], [(top: any) => "number" === typeof top, (top: any) => `[${top.map((elem: any) => $number(elem)).join(",")}]`]];
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
            })();
        if (true)
            return $sd0(elem);
        $throws({
            expected: "(Array<boolean> | Array<number> | Array<string> | ArrayUnion.IUnion)",
            value: elem
        });
    })()).join(",")}]`;
}; return stringify(assert(input)); }, ArrayUnion.SPOILERS);
