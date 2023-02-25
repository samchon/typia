import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_TagObjectUnion = _test_isStringify("TagObjectUnion", TagObjectUnion.generate, (input) => ((input: TagObjectUnion): string | null => { const is = (input: any): input is TagObjectUnion => {
    const $io0 = (input: any) => "number" === typeof input.value && !Number.isNaN(input.value) && 3 <= input.value;
    const $io1 = (input: any) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
    const $iu0 = (input: any) => (() => {
        if ("number" === typeof input.value && !Number.isNaN(input.value))
            return $io0(input);
        if ("string" === typeof input.value)
            return $io1(input);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
}; const stringify = (input: TagObjectUnion): string => {
    const $string = (typia.isStringify as any).string;
    const $throws = (typia.isStringify as any).throws;
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
}; return is(input) ? stringify(input) : null; })(input), TagObjectUnion.SPOILERS);
