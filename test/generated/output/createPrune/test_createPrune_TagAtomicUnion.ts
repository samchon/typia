import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_createPrune_TagAtomicUnion = _test_prune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input: TagAtomicUnion): void => {
        const $po0: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        if (Array.isArray(input))
            (() =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                }))();
    },
);
