import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_misc_isClone_TagAtomicUnion =
    _test_misc_isClone<TagAtomicUnion>(TagAtomicUnion)((input) =>
        ((
            input: any,
        ): typia.Primitive<IPointer<Array<TagAtomicUnion.Type>>> | null => {
            const is = (
                input: any,
            ): input is IPointer<Array<TagAtomicUnion.Type>> => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length) ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const clone = (
                input: IPointer<Array<TagAtomicUnion.Type>>,
            ): typia.Primitive<IPointer<Array<TagAtomicUnion.Type>>> => {
                const $io1 = (input: any): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length) ||
                    ("number" === typeof input.value && 3 <= input.value);
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
                    value: input.value as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    );
