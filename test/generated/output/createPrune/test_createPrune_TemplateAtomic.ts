import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
export const test_createPrune_TemplateAtomic = _test_prune("TemplateAtomic", TemplateAtomic.generate, (input: TemplateAtomic): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("prefix" === key || "postfix" === key || "middle_string" === key || "middle_string_empty" === key || "middle_numeric" === key || "middle_boolean" === key || "ipv4" === key || "email" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
