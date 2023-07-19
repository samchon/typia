import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_misc_isClone_TagAtomicUnion =
    _test_misc_isClone<TagAtomicUnion>(TagAtomicUnion)(
        (input: any): typia.Primitive<TagAtomicUnion> | null => {
            const is = (input: any): input is TagAtomicUnion => {
                const $io0 = (input: any): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length) ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value);
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
                input: TagAtomicUnion,
            ): typia.Primitive<TagAtomicUnion> => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co0(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    value: input.value as any,
                });
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        },
    );
