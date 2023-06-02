import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_createIsPrune_TagAtomicUnion = _test_isPrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input: any): input is TagAtomicUnion => {
        const is: any = (input: any): input is TagAtomicUnion => {
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
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const prune: any = (input: TagAtomicUnion): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("value" === key) continue;
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
    },
    TagAtomicUnion.SPOILERS,
);
