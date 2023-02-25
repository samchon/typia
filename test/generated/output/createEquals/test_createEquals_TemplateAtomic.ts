import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_TemplateAtomic = _test_equals("TemplateAtomic", TemplateAtomic.generate, (input: any, _exceptionable: boolean): input is TemplateAtomic => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.prefix && true === RegExp(/^prefix_(.*)/).test(input.prefix) && ("string" === typeof input.postfix && true === RegExp(/(.*)_postfix$/).test(input.postfix)) && ("string" === typeof input.middle_string && true === RegExp(/^the_(.*)_value$/).test(input.middle_string)) && ("string" === typeof input.middle_string_empty && true === RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) && ("string" === typeof input.middle_numeric && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle_numeric)) && ("the_false_value" === input.middle_boolean || "the_true_value" === input.middle_boolean) && ("string" === typeof input.ipv4 && true === RegExp(/^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/).test(input.ipv4)) && ("string" === typeof input.email && true === RegExp(/(.*)@(.*)\.(.*)/).test(input.email)) && (8 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["prefix", "postfix", "middle_string", "middle_string_empty", "middle_numeric", "middle_boolean", "ipv4", "email"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
