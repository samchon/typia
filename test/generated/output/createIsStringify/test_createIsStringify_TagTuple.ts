import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagTuple } from "../../../structures/TagTuple";
export const test_createIsStringify_TagTuple = _test_isStringify("TagTuple", TagTuple.generate, (input: TagTuple): string | null => { const is = (input: any): input is TagTuple => {
    const $io0 = (input: any): boolean => Array.isArray(input.tuple) && (input.tuple.length === 4 && ("string" === typeof input.tuple[0] && 3 <= input.tuple[0].length && 7 >= input.tuple[0].length) && ("number" === typeof input.tuple[1] && 3 <= input.tuple[1] && 7 >= input.tuple[1]) && (Array.isArray(input.tuple[2]) && 3 <= input.tuple[2].length && 7 >= input.tuple[2].length && input.tuple[2].every((elem: any) => "string" === typeof elem && 3 <= elem.length && 7 >= elem.length)) && (Array.isArray(input.tuple[3]) && 3 <= input.tuple[3].length && 7 >= input.tuple[3].length && input.tuple[3].every((elem: any) => "number" === typeof elem && 3 <= elem && 7 >= elem)));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: TagTuple): string => {
    const $string = (typia.createIsStringify as any).string;
    const $number = (typia.createIsStringify as any).number;
    const $so0 = (input: any): any => `{"tuple":${`[${$string(input.tuple[0])},${$number(input.tuple[1])},${`[${input.tuple[2].map((elem: any) => $string(elem)).join(",")}]`},${`[${input.tuple[3].map((elem: any) => $number(elem)).join(",")}]`}]`}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, TagTuple.SPOILERS);
