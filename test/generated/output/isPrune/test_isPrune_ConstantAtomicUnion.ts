import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_isPrune_ConstantAtomicUnion = _test_isPrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) =>
        ((input: any): input is Array<ConstantAtomicUnion.Union> => {
            const is: any = (
                input: any,
            ): input is Array<ConstantAtomicUnion.Union> => {
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
            const prune: any = (
                input: Array<ConstantAtomicUnion.Union>,
            ): void => {
                const $po0: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("key" === key) continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    (() =>
                        input.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po0(elem);
                        }))();
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ConstantAtomicUnion.SPOILERS,
);
