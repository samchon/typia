import typia from "../../../../src";
import { TagLength } from "../../../structures/TagLength";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TagLength = _test_isClone(
    "TagLength",
    TagLength.generate,
    (input: any): typia.Primitive<TagLength> | null => {
        const is = (input: any): input is TagLength => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.fixed &&
                5 === input.fixed.length &&
                "string" === typeof input.minimum &&
                3 <= input.minimum.length &&
                "string" === typeof input.maximum &&
                7 >= input.maximum.length &&
                "string" === typeof input.minimum_and_maximum &&
                3 <= input.minimum_and_maximum.length &&
                7 >= input.minimum_and_maximum.length;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const clone = (input: TagLength): typia.Primitive<TagLength> => {
            const $co0 = (input: any): any => ({
                fixed: input.fixed as any,
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                minimum_and_maximum: input.minimum_and_maximum as any,
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
    TagLength.SPOILERS,
);
