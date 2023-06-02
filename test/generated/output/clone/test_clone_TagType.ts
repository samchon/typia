import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagType } from "../../../structures/TagType";

export const test_clone_TagType = _test_clone(
    "TagType",
    TagType.generate,
    (input) =>
        ((input: Array<TagType.Type>): typia.Primitive<Array<TagType.Type>> => {
            const $co0: any = (input: any): any => ({
                int: input.int as any,
                uint: input.uint as any,
            });
            return Array.isArray(input)
                ? (() =>
                      input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      ))()
                : (input as any);
        })(input),
);
