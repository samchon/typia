import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TagRange = _test_clone("TagRange", TagRange.generate, (input) => ((input: Type[]): typia.Primitive<Type[]> => {
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
})(input));
