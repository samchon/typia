import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_createPrune_TemplateConstant = _test_prune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input: TemplateConstant): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("prefix" === key || "postfix" === key || "combined" === key)
                    continue;
                delete input[key];
            }
        };
        if (Array.isArray(input))
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po0(elem);
            });
    },
);
