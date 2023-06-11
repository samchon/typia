import typia from "../../../../src";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";
import { _test_assertParse } from "../../../internal/_test_assertParse";
export const test_assertParse_TagObjectUnion = _test_assertParse("TagObjectUnion", TagObjectUnion.generate, (input) => ((input: string): typia.Primitive<TagObjectUnion> => { const assert = (input: any): TagObjectUnion => {
    const __is = (input: any): input is TagObjectUnion => {
        const $io0 = (input: any): boolean => "number" === typeof input.value && Number.isFinite(input.value) && 3 <= input.value;
        const $io1 = (input: any): boolean => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
        const $iu0 = (input: any): any => (() => {
            if ("string" === typeof input.value)
                return $io1(input);
            if ("number" === typeof input.value && Number.isFinite(input.value))
                return $io0(input);
            return false;
        })();
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is TagObjectUnion => {
            const $guard = (typia.assertParse as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "number" === typeof input.value && Number.isFinite(input.value) && (3 <= input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number (@minimum 3)",
                value: input.value
            })) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value
            });
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "string" === typeof input.value && (3 <= input.value.length || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string (@minLength 3)",
                value: input.value
            })) && (7 >= input.value.length || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string (@maxLength 7)",
                value: input.value
            })) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            });
            const $au0 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
                if ("string" === typeof input.value)
                    return $ao1(input, _path, true && _exceptionable);
                if ("number" === typeof input.value)
                    return $ao0(input, _path, true && _exceptionable);
                return $guard(_exceptionable, {
                    path: _path,
                    expected: "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                    value: input
                });
            })();
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "TagObjectUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                value: elem
            })) && $au0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "TagObjectUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; })(input), TagObjectUnion.SPOILERS);
