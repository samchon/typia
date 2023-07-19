import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TagArray } from "../../../structures/TagArray";

export const test_misc_isClone_TagArray = _test_misc_isClone<TagArray>(
    TagArray,
)((input) =>
    ((input: any): typia.Primitive<Array<TagArray.Type>> | null => {
        const is = (input: any): input is Array<TagArray.Type> => {
            const $is_uuid = (typia.misc.isClone as any).is_uuid;
            const $io0 = (input: any): boolean =>
                Array.isArray(input.items) &&
                3 === input.items.length &&
                input.items.every(
                    (elem: any) => "string" === typeof elem && $is_uuid(elem),
                ) &&
                Array.isArray(input.minItems) &&
                3 <= input.minItems.length &&
                input.minItems.every(
                    (elem: any) =>
                        "number" === typeof elem &&
                        Number.isFinite(elem) &&
                        3 <= elem,
                ) &&
                Array.isArray(input.maxItems) &&
                7 >= input.maxItems.length &&
                input.maxItems.every(
                    (elem: any) =>
                        ("string" === typeof elem && 7 >= elem.length) ||
                        ("number" === typeof elem &&
                            Number.isFinite(elem) &&
                            7 >= elem),
                ) &&
                Array.isArray(input.both) &&
                3 <= input.both.length &&
                7 >= input.both.length &&
                input.both.every(
                    (elem: any) => "string" === typeof elem && $is_uuid(elem),
                );
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const clone = (
            input: Array<TagArray.Type>,
        ): typia.Primitive<Array<TagArray.Type>> => {
            const $is_uuid = (typia.misc.isClone as any).is_uuid;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co0(elem)
                        : (elem as any),
                );
            const $cp1 = (input: any) => input.map((elem: any) => elem as any);
            const $cp2 = (input: any) => input.map((elem: any) => elem as any);
            const $cp3 = (input: any) => input.map((elem: any) => elem as any);
            const $co0 = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? $cp1(input.items)
                    : (input.items as any),
                minItems: Array.isArray(input.minItems)
                    ? $cp2(input.minItems)
                    : (input.minItems as any),
                maxItems: Array.isArray(input.maxItems)
                    ? $cp3(input.maxItems)
                    : (input.maxItems as any),
                both: Array.isArray(input.both)
                    ? $cp1(input.both)
                    : (input.both as any),
            });
            return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    })(input),
);
