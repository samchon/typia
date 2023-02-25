import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_TagAtomicUnion = _test_assertStringify("TagAtomicUnion", TagAtomicUnion.generate, (input) => ((input: TagAtomicUnion): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagAtomicUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || "number" === typeof input.value && !Number.isNaN(input.value) && 3 <= input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "(number | string)",
            value: input.value
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<TagAtomicUnion.Type>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagAtomicUnion.Type>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as TagAtomicUnion;
}; const stringify = (input: TagAtomicUnion): string => {
    const $string = (typia.assertStringify as any).string;
    const $throws = (typia.assertStringify as any).throws;
    const $so0 = (input: any) => `{"value":${(() => {
        if ("string" === typeof input.value)
            return $string(input.value);
        if ("number" === typeof input.value)
            return input.value;
        $throws({
            expected: "(number | string)",
            value: input.value
        });
    })()}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; return stringify(assert(input)); })(input), TagAtomicUnion.SPOILERS);
