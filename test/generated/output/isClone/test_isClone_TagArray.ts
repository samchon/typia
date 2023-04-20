import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TagArray } from "../../../structures/TagArray";

export const test_isClone_TagArray = _test_isClone(
    "TagArray",
    TagArray.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TagArray.Type>> | null => {
            const is = (input: any): input is Array<TagArray.Type> => {
                const $is_uuid = (typia.isClone as any).is_uuid;
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.items) &&
                    3 === input.items.length &&
                    input.items.every(
                        (elem: any) =>
                            "string" === typeof elem && $is_uuid(elem),
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
                        (elem: any) =>
                            "string" === typeof elem && $is_uuid(elem),
                    );
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const clone = (
                input: Array<TagArray.Type>,
            ): typia.Primitive<Array<TagArray.Type>> => {
                const $is_uuid = (typia.isClone as any).is_uuid;
                const $co0 = (input: any): any => ({
                    items: Array.isArray(input.items)
                        ? input.items.map((elem: any) => elem as any)
                        : (input.items as any),
                    minItems: Array.isArray(input.minItems)
                        ? input.minItems.map((elem: any) => elem as any)
                        : (input.minItems as any),
                    maxItems: Array.isArray(input.maxItems)
                        ? input.maxItems.map((elem: any) => elem as any)
                        : (input.maxItems as any),
                    both: Array.isArray(input.both)
                        ? input.both.map((elem: any) => elem as any)
                        : (input.both as any),
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
        })(input),
    TagArray.SPOILERS,
);
