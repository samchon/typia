import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_isClone_TagAtomicUnion = _test_isClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TagAtomicUnion.Type>> | null => {
            const is: any = (
                input: any,
            ): input is Array<TagAtomicUnion.Type> => {
                const $io0: any = (input: any): boolean =>
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
            const clone: any = (
                input: Array<TagAtomicUnion.Type>,
            ): typia.Primitive<Array<TagAtomicUnion.Type>> => {
                const $co0: any = (input: any): any => ({
                    value: input.value as any,
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
        })(input),
    TagAtomicUnion.SPOILERS,
);
