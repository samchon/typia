import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_misc_prune_TemplateConstant = _test_misc_prune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) =>
        ((input: Array<TemplateConstant.Type>): void => {
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "prefix" === key ||
                        "postfix" === key ||
                        "combined" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input)) $pp0(input);
        })(input),
);
