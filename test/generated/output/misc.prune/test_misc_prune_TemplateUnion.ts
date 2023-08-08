import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_misc_prune_TemplateUnion = _test_misc_prune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) =>
        ((input: Array<TemplateUnion.Type>): void => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name;
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
            const $po0 = (input: any): any => {
                if ("object" === typeof input.mixed && null !== input.mixed)
                    $po1(input.mixed);
                for (const key of Object.keys(input)) {
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
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("name" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input)) $pp0(input);
        })(input),
);
