import typia from "../../../../src";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
export const test_assertEquals_TagAtomicUnion = _test_assertEquals("TagAtomicUnion", TagAtomicUnion.generate, (input) => ((input: any): Array<TagAtomicUnion.Type> => {
    const __is = (input: any, _exceptionable: boolean = true): input is Array<TagAtomicUnion.Type> => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => ("string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || "number" === typeof input.value && Number.isFinite(input.value) && 3 <= input.value) && (1 === Object.keys(input).length || Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<TagAtomicUnion.Type> => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.value && (3 <= input.value.length || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string (@minLength 3)",
                value: input.value
            })) && (7 >= input.value.length || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string (@maxLength 7)",
                value: input.value
            })) || "number" === typeof input.value && Number.isFinite(input.value) && (3 <= input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number (@minimum 3)",
                value: input.value
            })) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "(number | string)",
                value: input.value
            })) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            })));
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "TagAtomicUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagAtomicUnion.Type",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagAtomicUnion.Type",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "TagAtomicUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
})(input));
