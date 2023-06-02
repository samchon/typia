import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_createPrune_TemplateUnion = _test_prune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input: TemplateUnion): void => {
        const $io1: any = (input: any): boolean =>
            "string" === typeof input.name;
        const $po0: any = (input: any): any => {
            if ("object" === typeof input.mixed && null !== input.mixed)
                $po1(input.mixed);
            for (const key: any of Object.keys(input)) {
                if (
                    "prefix" === key ||
                    "postfix" === key ||
                    "middle" === key ||
                    "mixed" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po1: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
                if ("name" === key) continue;
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
