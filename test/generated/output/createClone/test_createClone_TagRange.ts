import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagRange } from "../../../structures/TagRange";

export const test_createClone_TagRange = _test_clone(
    "TagRange",
    TagRange.generate,
    (input: TagRange): typia.Primitive<TagRange> => {
        const $co0: any = (input: any): any => ({
            greater: input.greater as any,
            greater_equal: input.greater_equal as any,
            less: input.less as any,
            less_equal: input.less_equal as any,
            greater_less: input.greater_less as any,
            greater_equal_less: input.greater_equal_less as any,
            greater_less_equal: input.greater_less_equal as any,
            greater_equal_less_equal: input.greater_equal_less_equal as any,
        });
        return Array.isArray(input)
            ? (() =>
                  input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co0(elem)
                          : (elem as any),
                  ))()
            : (input as any);
    },
);
