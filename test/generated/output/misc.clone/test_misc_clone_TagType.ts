import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TagType } from "../../../structures/TagType";

export const test_misc_clone_TagType = _test_misc_clone(
    "TagType",
    TagType.generate,
    (input) =>
        ((input: Array<TagType.Type>): typia.Primitive<Array<TagType.Type>> => {
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co0(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                int: input.int as any,
                uint: input.uint as any,
            });
            return Array.isArray(input) ? $cp0(input) : (input as any);
        })(input),
);
