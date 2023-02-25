import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_TagObjectUnion = _test_assertStringify("TagObjectUnion", TagObjectUnion.generate, (input: TagObjectUnion): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagObjectUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "number" === typeof input.value && !Number.isNaN(input.value) && 3 <= input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        });
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        });
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("number" === typeof input.value)
                return $ao0(input, _path, true && _exceptionable);
            if ("string" === typeof input.value)
                return $ao1(input, _path, true && _exceptionable);
            return $guard(_exceptionable, {
                path: _path,
                expected: "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as TagObjectUnion;
}; const stringify = (input: TagObjectUnion): string => {
    const $string = (typia.createAssertStringify as any).string;
    const $throws = (typia.createAssertStringify as any).throws;
    const $io0 = (input: any) => "number" === typeof input.value && 3 <= input.value;
    const $io1 = (input: any) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
    const $iu0 = (input: any) => (() => {
        if ("number" === typeof input.value)
            return $io0(input);
        if ("string" === typeof input.value)
            return $io1(input);
        return false;
    })();
    const $so0 = (input: any) => `{"value":${input.value}}`;
    const $so1 = (input: any) => `{"value":${$string(input.value)}}`;
    const $su0 = (input: any) => (() => {
        if ("number" === typeof input.value)
            return $so0(input);
        if ("string" === typeof input.value)
            return $so1(input);
        $throws({
            expected: "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
}; return stringify(assert(input)); }, TagObjectUnion.SPOILERS);
