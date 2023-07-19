import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TagLength } from "../../../structures/TagLength";

export const test_misc_isClone_TagLength = _test_misc_isClone<TagLength>(
    TagLength,
)((input: any): typia.Primitive<TagLength> | null => {
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
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem && null !== elem
                    ? $co0(elem)
                    : (elem as any),
            );
        const $co0 = (input: any): any => ({
            fixed: input.fixed as any,
            minimum: input.minimum as any,
            maximum: input.maximum as any,
            minimum_and_maximum: input.minimum_and_maximum as any,
        });
        return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
});
