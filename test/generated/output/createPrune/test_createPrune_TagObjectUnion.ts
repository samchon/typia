import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_createPrune_TagObjectUnion = _test_prune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input: TagObjectUnion): void => {
        const $io0: any = (input: any): boolean =>
            "number" === typeof input.value && 3 <= input.value;
        const $io1: any = (input: any): boolean =>
            "string" === typeof input.value &&
            3 <= input.value.length &&
            7 >= input.value.length;
        const $throws: any = (typia.createPrune as any).throws;
        const $po0: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $po1: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        if (Array.isArray(input))
            (() =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $pu0(elem);
                }))();
    },
);
