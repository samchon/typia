import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createEquals_ConstantAtomicUnion = _test_equals(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is Array<ConstantAtomicUnion.Union> => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "key" === input.key &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (["key"].some((prop) => key === prop)) return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any, _index1: number) =>
                    false === elem ||
                    1 === elem ||
                    2 === elem ||
                    "three" === elem ||
                    "four" === elem ||
                    ("object" === typeof elem &&
                        null !== elem &&
                        $io0(elem, true)),
            )
        );
    },
);
