import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_TagRange = _test_isClone("TagRange", TagRange.generate, (input) => ((input: any): typia.Primitive<TagRange> | null => { const is = (input: any): input is TagRange => {
    const $io0 = (input: any) => "number" === typeof input.greater && 3 < input.greater && ("number" === typeof input.greater_equal && 3 <= input.greater_equal) && ("number" === typeof input.less && 7 > input.less) && ("number" === typeof input.less_equal && 7 >= input.less_equal) && ("number" === typeof input.greater_less && 3 < input.greater_less && 7 > input.greater_less) && ("number" === typeof input.greater_equal_less && 3 <= input.greater_equal_less && 7 > input.greater_equal_less) && ("number" === typeof input.greater_less_equal && 3 < input.greater_less_equal && 7 >= input.greater_less_equal) && ("number" === typeof input.greater_equal_less_equal && 3 <= input.greater_equal_less_equal && 7 >= input.greater_equal_less_equal);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const clone = (input: TagRange): typia.Primitive<TagRange> => {
    const $co0 = (input: any) => ({
        greater: input.greater,
        greater_equal: input.greater_equal,
        less: input.less,
        less_equal: input.less_equal,
        greater_less: input.greater_less,
        greater_equal_less: input.greater_equal_less,
        greater_less_equal: input.greater_less_equal,
        greater_equal_less_equal: input.greater_equal_less_equal
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), TagRange.SPOILERS);
