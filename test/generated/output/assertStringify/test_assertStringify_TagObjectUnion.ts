import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";
export const test_assertStringify_TagObjectUnion = _test_assertStringify("TagObjectUnion", TagObjectUnion.generate, (input) => ((input: any): string => { const assert = (input: any): Array<TagObjectUnion.Type> => {
    const $guard = (typia.assertStringify as any).guard;
    const __is = (input: any): input is Array<TagObjectUnion.Type> => {
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
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<TagObjectUnion.Type> => {
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
                expected: "Array<(TagObjectUnion.Literal | TagObjectUnion.Numeric)>",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                value: elem
            })) && $au0(elem, _path + "[" + _index1 + "]", true));
        })(input, "$input", true);
    return input;
}; const stringify = (input: Array<TagObjectUnion.Type>): string => {
    const $number = (typia.assertStringify as any).number;
    const $string = (typia.assertStringify as any).string;
    const $throws = (typia.assertStringify as any).throws;
    const $io0 = (input: any): boolean => "number" === typeof input.value && 3 <= input.value;
    const $io1 = (input: any): boolean => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
    const $iu0 = (input: any): any => (() => {
        if ("string" === typeof input.value)
            return $io1(input);
        if ("number" === typeof input.value)
            return $io0(input);
        return false;
    })();
    const $so0 = (input: any): any => `{"value":${$number(input.value)}}`;
    const $so1 = (input: any): any => `{"value":${$string(input.value)}}`;
    const $su0 = (input: any): any => (() => {
        if ("string" === typeof input.value)
            return $so1(input);
        if ("number" === typeof input.value)
            return $so0(input);
        $throws({
            expected: "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
}; return stringify(assert(input)); })(input), TagObjectUnion.SPOILERS);
