import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_prune } from "../internal/_test_prune";
export const test_prune_TemplateUnion = _test_prune("TemplateUnion", TemplateUnion.generate, (input) => ((input: TemplateUnion): void => {
    const $io1 = (input: any) => "string" === typeof input.name;
    const $po0 = (input: any) => {
        if ("object" === typeof input.mixed && null !== input.mixed)
            $po1(input.mixed);
        for (const key of Object.keys(input)) {
            if ("prefix" === key || "postfix" === key || "middle" === key || "mixed" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("name" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
})(input));
