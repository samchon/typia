import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TagLength } from "../../../structures/TagLength";

export const test_misc_isClone_TagLength = _test_misc_isClone<TagLength>(
    TagLength,
)((input: any): typia.Primitive<TagLength> | null => {
    const is = (input: any): input is TagLength => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            "string" === typeof input.fixed &&
            5 === input.fixed.length &&
            "string" === typeof input.minimum &&
            3 <= input.minimum.length &&
            "string" === typeof input.maximum &&
            7 >= input.maximum.length &&
            "string" === typeof input.minimum_and_maximum &&
            3 <= input.minimum_and_maximum.length &&
            7 >= input.minimum_and_maximum.length &&
            "string" === typeof input.equal &&
            10 <= input.equal.length &&
            19 >= input.equal.length;
        return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (input: TagLength): typia.Primitive<TagLength> => {
        const $io1 = (input: any): boolean =>
            "string" === typeof input.fixed &&
            5 === input.fixed.length &&
            "string" === typeof input.minimum &&
            3 <= input.minimum.length &&
            "string" === typeof input.maximum &&
            7 >= input.maximum.length &&
            "string" === typeof input.minimum_and_maximum &&
            3 <= input.minimum_and_maximum.length &&
            7 >= input.minimum_and_maximum.length &&
            "string" === typeof input.equal &&
            10 <= input.equal.length &&
            19 >= input.equal.length;
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
            fixed: input.fixed as any,
            minimum: input.minimum as any,
            maximum: input.maximum as any,
            minimum_and_maximum: input.minimum_and_maximum as any,
            equal: input.equal as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
});
