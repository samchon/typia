import typia from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ToJsonArray = _test_isStringify("ToJsonArray", ToJsonArray.generate, (input) => ((input: ToJsonArray): string | null => { const is = (input: any): input is ToJsonArray => {
    const $io0 = (input: any) => true;
    const $io1 = (input: any) => true;
    const $io2 = (input: any) => true;
    const $io3 = (input: any) => true;
    return Array.isArray(input) && (input.length === 4 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])) && ("object" === typeof input[3] && null !== input[3] && $io3(input[3])));
}; const stringify = (input: ToJsonArray): string => {
    const $string = (typia.isStringify as any).string;
    return `[${`[${input[0].toJSON().map((elem: any) => elem).join(",")}]`},${`[${input[1].toJSON().map((elem: any) => elem).join(",")}]`},${`[${input[2].toJSON().map((elem: any) => $string(elem)).join(",")}]`},${`[${input[3].toJSON().map((elem: any) => `{"id":${$string(elem.id)}}`).join(",")}]`}]`;
}; return is(input) ? stringify(input) : null; })(input));
