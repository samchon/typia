import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TagType } from "../../../structures/TagType";

export const test_misc_clone_TagType = _test_misc_clone<TagType>(TagType)(
    (input: TagType): typia.Primitive<TagType> => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.int &&
            parseInt(input.int) === input.int &&
            "number" === typeof input.uint &&
            parseInt(input.uint) === input.uint &&
            0 <= input.uint;
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
            int: input.int as any,
            uint: input.uint as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
