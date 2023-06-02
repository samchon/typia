import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TagArray } from "../../../structures/TagArray";

export const test_createIsClone_TagArray = _test_isClone(
    "TagArray",
    TagArray.generate,
    (input: any): typia.Primitive<TagArray> | null => {
        const is: any = (input: any): input is TagArray => {
            const $is_uuid: any = (typia.createIsClone as any).is_uuid;
            const $io0: any = (input: any): boolean =>
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
        const clone: any = (input: TagArray): typia.Primitive<TagArray> => {
            const $is_uuid: any = (typia.createIsClone as any).is_uuid;
            const $co0: any = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? (() => input.items.map((elem: any) => elem as any))()
                    : (input.items as any),
                minItems: Array.isArray(input.minItems)
                    ? (() => input.minItems.map((elem: any) => elem as any))()
                    : (input.minItems as any),
                maxItems: Array.isArray(input.maxItems)
                    ? (() => input.maxItems.map((elem: any) => elem as any))()
                    : (input.maxItems as any),
                both: Array.isArray(input.both)
                    ? (() => input.both.map((elem: any) => elem as any))()
                    : (input.both as any),
            });
            return Array.isArray(input)
                ? (() =>
                      input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      ))()
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    TagArray.SPOILERS,
);
