import typia from "../../../../src";
import { TagRange } from "../../../structures/TagRange";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TagRange = _test_isClone(
    "TagRange",
    TagRange.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TagRange.Type>> | null => {
            const is = (input: any): input is Array<TagRange.Type> => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.greater &&
                    Number.isFinite(input.greater) &&
                    3 < input.greater &&
                    "number" === typeof input.greater_equal &&
                    Number.isFinite(input.greater_equal) &&
                    3 <= input.greater_equal &&
                    "number" === typeof input.less &&
                    Number.isFinite(input.less) &&
                    7 > input.less &&
                    "number" === typeof input.less_equal &&
                    Number.isFinite(input.less_equal) &&
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
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const clone = (
                input: Array<TagRange.Type>,
            ): typia.Primitive<Array<TagRange.Type>> => {
                const $co0 = (input: any): any => ({
                    greater: input.greater as any,
                    greater_equal: input.greater_equal as any,
                    less: input.less as any,
                    less_equal: input.less_equal as any,
                    greater_less: input.greater_less as any,
                    greater_equal_less: input.greater_equal_less as any,
                    greater_less_equal: input.greater_less_equal as any,
                    greater_equal_less_equal:
                        input.greater_equal_less_equal as any,
                });
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      )
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    TagRange.SPOILERS,
);
