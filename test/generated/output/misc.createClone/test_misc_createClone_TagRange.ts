import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TagRange } from "../../../structures/TagRange";

export const test_misc_clone_TagRange = _test_misc_clone<TagRange>(TagRange)(
    (input: TagRange): typia.Primitive<TagRange> => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.greater &&
            3 < input.greater &&
            "number" === typeof input.greater_equal &&
            3 <= input.greater_equal &&
            "number" === typeof input.less &&
            7 > input.less &&
            "number" === typeof input.less_equal &&
            7 >= input.less_equal &&
            "number" === typeof input.greater_less &&
            3 < input.greater_less &&
            7 > input.greater_less &&
            "number" === typeof input.greater_equal_less &&
            3 <= input.greater_equal_less &&
            7 > input.greater_equal_less &&
            "number" === typeof input.greater_less_equal &&
            3 < input.greater_less_equal &&
            7 >= input.greater_less_equal &&
            "number" === typeof input.greater_equal_less_equal &&
            3 <= input.greater_equal_less_equal &&
            7 >= input.greater_equal_less_equal;
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem && null !== elem
                    ? $co1(elem)
                    : (elem as any),
            );
        const $co0 = (input: any): any => ({
            value: Array.isArray(input.value)
                ? $cp0(input.value)
                : (input.value as any),
        });
        const $co1 = (input: any): any => ({
            greater: input.greater as any,
            greater_equal: input.greater_equal as any,
            less: input.less as any,
            less_equal: input.less_equal as any,
            greater_less: input.greater_less as any,
            greater_equal_less: input.greater_equal_less as any,
            greater_less_equal: input.greater_less_equal as any,
            greater_equal_less_equal: input.greater_equal_less_equal as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
