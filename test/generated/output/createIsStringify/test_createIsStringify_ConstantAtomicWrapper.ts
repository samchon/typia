import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ConstantAtomicWrapper = _test_isStringify("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input: ConstantAtomicWrapper): string | null => { const is = (input: any): input is ConstantAtomicWrapper => {
    const $io0 = (input: any) => "boolean" === typeof input.value;
    const $io1 = (input: any) => "number" === typeof input.value && !Number.isNaN(input.value);
    const $io2 = (input: any) => "string" === typeof input.value;
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])));
}; const stringify = (input: ConstantAtomicWrapper): string => {
    const $string = (typia.createIsStringify as any).string;
    return `[${`{"value":${input[0].value}}`},${`{"value":${input[1].value}}`},${`{"value":${$string(input[2].value)}}`}]`;
}; return is(input) ? stringify(input) : null; }, ConstantAtomicWrapper.SPOILERS);
