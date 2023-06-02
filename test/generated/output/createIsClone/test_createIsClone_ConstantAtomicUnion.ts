import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createIsClone_ConstantAtomicUnion = _test_isClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input: any): typia.Primitive<ConstantAtomicUnion> | null => {
        const is: any = (input: any): input is ConstantAtomicUnion => {
            const $io0: any = (input: any): boolean => "key" === input.key;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        false === elem ||
                        1 === elem ||
                        2 === elem ||
                        "three" === elem ||
                        "four" === elem ||
                        ("object" === typeof elem &&
                            null !== elem &&
                            $io0(elem)),
                )
            );
        };
        const clone: any = (
            input: ConstantAtomicUnion,
        ): typia.Primitive<ConstantAtomicUnion> => {
            const $co0: any = (input: any): any => ({
                key: input.key as any,
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
    ConstantAtomicUnion.SPOILERS,
);
