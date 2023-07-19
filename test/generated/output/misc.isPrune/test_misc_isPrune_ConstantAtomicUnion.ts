import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_misc_isPrune_ConstantAtomicUnion =
    _test_misc_isPrune<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
        ((input: any): input is Array<ConstantAtomicUnion.Union> => {
            const is = (
                input: any,
            ): input is Array<ConstantAtomicUnion.Union> => {
                const $io0 = (input: any): boolean => "key" === input.key;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            false === elem ||
                            2 === elem ||
                            1 === elem ||
                            "three" === elem ||
                            "four" === elem ||
                            ("object" === typeof elem &&
                                null !== elem &&
                                $io0(elem)),
                    )
                );
            };
            const prune = (input: Array<ConstantAtomicUnion.Union>): void => {
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("key" === key) continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input)) $pp0(input);
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    );
