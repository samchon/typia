import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ArrayAny = _test_isStringify("ArrayAny", ArrayAny.generate, (input) => ((input: ArrayAny): string | null => { const is = (input: any): input is ArrayAny => {
    const $io0 = (input: any) => Array.isArray(input.anys) && Array.isArray(input.undefindable1) && Array.isArray(input.undefindable2) && Array.isArray(input.nullables1) && Array.isArray(input.nullables2) && Array.isArray(input.both1) && Array.isArray(input.both2) && Array.isArray(input.both3) && Array.isArray(input.union);
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: ArrayAny): string => {
    const $so0 = (input: any) => `{"anys":${JSON.stringify(input.anys)},"undefindable1":${JSON.stringify(input.undefindable1)},"undefindable2":${JSON.stringify(input.undefindable2)},"nullables1":${JSON.stringify(input.nullables1)},"nullables2":${JSON.stringify(input.nullables2)},"both1":${JSON.stringify(input.both1)},"both2":${JSON.stringify(input.both2)},"both3":${JSON.stringify(input.both3)},"union":${JSON.stringify(input.union)}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; })(input), ArrayAny.SPOILERS);
