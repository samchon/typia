import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_TupleRestObject = _test_isStringify("TupleRestObject", TupleRestObject.generate, (input) => ((input: TupleRestObject): string | null => { const is = (input: any): input is TupleRestObject => {
    const $io0 = (input: any) => "string" === typeof input.value;
    return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && !Number.isNaN(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))));
}; const stringify = (input: TupleRestObject): string => {
    const $string = (typia.isStringify as any).string;
    const $rest = (typia.isStringify as any).rest;
    return `[${input[0]},${input[1]}${$rest(`[${input.slice(2).map((elem: any) => `{"value":${$string(elem.value)}}`).join(",")}]`)}]`;
}; return is(input) ? stringify(input) : null; })(input), TupleRestObject.SPOILERS);
