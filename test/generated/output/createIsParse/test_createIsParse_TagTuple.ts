import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { TagTuple } from "../../../structures/TagTuple";
export const test_createIsParse_TagTuple = _test_isParse("TagTuple", TagTuple.generate, (input: any): typia.Primitive<TagTuple> => { const is = (input: any): input is TagTuple => {
    const $io0 = (input: any): boolean => Array.isArray(input.tuple) && (input.tuple.length === 4 && ("string" === typeof input.tuple[0] && 3 <= input.tuple[0].length && 7 >= input.tuple[0].length) && ("number" === typeof input.tuple[1] && 3 <= input.tuple[1] && 7 >= input.tuple[1]) && (Array.isArray(input.tuple[2]) && 3 <= input.tuple[2].length && 7 >= input.tuple[2].length && input.tuple[2].every((elem: any) => "string" === typeof elem && 3 <= elem.length && 7 >= elem.length)) && (Array.isArray(input.tuple[3]) && 3 <= input.tuple[3].length && 7 >= input.tuple[3].length && input.tuple[3].every((elem: any) => "number" === typeof elem && 3 <= elem && 7 >= elem)));
    return "object" === typeof input && null !== input && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, TagTuple.SPOILERS);
