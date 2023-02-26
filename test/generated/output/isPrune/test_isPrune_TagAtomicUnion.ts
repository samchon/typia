import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_isPrune_TagAtomicUnion = _test_isPrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) =>
        ((input: any): input is Array<TagAtomicUnion.Type> => {
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
            const prune = (input: TagAtomicUnion): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    TagAtomicUnion.SPOILERS,
);
