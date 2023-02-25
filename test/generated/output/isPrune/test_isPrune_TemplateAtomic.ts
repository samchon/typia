import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_TemplateAtomic = _test_isPrune("TemplateAtomic", TemplateAtomic.generate, (input) => ((input: any): input is TemplateAtomic => { const is = (input: any): input is TemplateAtomic => {
    const $io0 = (input: any) => "string" === typeof input.prefix && true === RegExp(/^prefix_(.*)/).test(input.prefix) && ("string" === typeof input.postfix && true === RegExp(/(.*)_postfix$/).test(input.postfix)) && ("string" === typeof input.middle_string && true === RegExp(/^the_(.*)_value$/).test(input.middle_string)) && ("string" === typeof input.middle_string_empty && true === RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) && ("string" === typeof input.middle_numeric && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle_numeric)) && ("the_false_value" === input.middle_boolean || "the_true_value" === input.middle_boolean) && ("string" === typeof input.ipv4 && true === RegExp(/^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/).test(input.ipv4)) && ("string" === typeof input.email && true === RegExp(/(.*)@(.*)\.(.*)/).test(input.email));
    return "object" === typeof input && null !== input && $io0(input);
}; const prune = (input: TemplateAtomic): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("prefix" === key || "postfix" === key || "middle_string" === key || "middle_string_empty" === key || "middle_numeric" === key || "middle_boolean" === key || "ipv4" === key || "email" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), TemplateAtomic.SPOILERS);
