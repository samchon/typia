import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_TagAtomicUnion = _test_isStringify("TagAtomicUnion", TagAtomicUnion.generate, (input) => ((input: TagAtomicUnion): string | null => { const is = (input: any): input is TagAtomicUnion => {
    const $io0 = (input: any) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || "number" === typeof input.value && !Number.isNaN(input.value) && 3 <= input.value;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: TagAtomicUnion): string => {
    const $string = (typia.isStringify as any).string;
    const $throws = (typia.isStringify as any).throws;
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
}; return is(input) ? stringify(input) : null; })(input), TagAtomicUnion.SPOILERS);
