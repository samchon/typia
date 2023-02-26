import typia from "../../../../src";
import { TagType } from "../../../structures/TagType";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TagType = _test_isClone(
    "TagType",
    TagType.generate,
    (input: any): typia.Primitive<TagType> | null => {
        const is = (input: any): input is TagType => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.int &&
                Number.isFinite(input.int) &&
                parseInt(input.int) === input.int &&
                "number" === typeof input.uint &&
                Number.isFinite(input.uint) &&
                parseInt(input.uint) === input.uint &&
                0 <= input.uint;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const clone = (input: TagType): typia.Primitive<TagType> => {
            const $co0 = (input: any): any => ({
                int: input.int as any,
                uint: input.uint as any,
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
    },
    TagType.SPOILERS,
);
