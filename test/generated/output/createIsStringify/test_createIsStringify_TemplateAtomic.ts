import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
export const test_createIsStringify_TemplateAtomic = _test_isStringify("TemplateAtomic", TemplateAtomic.generate, (input: TemplateAtomic): string | null => { const is = (input: any): input is TemplateAtomic => {
    const $io0 = (input: any): boolean => "string" === typeof input.prefix && RegExp(/^prefix_(.*)/).test(input.prefix) && ("string" === typeof input.postfix && RegExp(/(.*)_postfix$/).test(input.postfix)) && ("string" === typeof input.middle_string && RegExp(/^the_(.*)_value$/).test(input.middle_string)) && ("string" === typeof input.middle_string_empty && RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) && ("string" === typeof input.middle_numeric && RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle_numeric)) && ("the_false_value" === input.middle_boolean || "the_true_value" === input.middle_boolean) && ("string" === typeof input.ipv4 && RegExp(/^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/).test(input.ipv4)) && ("string" === typeof input.email && RegExp(/(.*)@(.*)\.(.*)/).test(input.email));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: TemplateAtomic): string => {
    const $string = (typia.createIsStringify as any).string;
    const $throws = (typia.createIsStringify as any).throws;
    const $so0 = (input: any): any => `{"prefix":${$string(input.prefix)},"postfix":${$string(input.postfix)},"middle_string":${$string(input.middle_string)},"middle_string_empty":${$string(input.middle_string_empty)},"middle_numeric":${$string(input.middle_numeric)},"middle_boolean":${(() => {
        if ("string" === typeof input.middle_boolean)
            return $string(input.middle_boolean);
        if ("string" === typeof input.middle_boolean)
            return "\"" + input.middle_boolean + "\"";
        $throws({
            expected: "(\"the_false_value\" | \"the_true_value\")",
            value: input.middle_boolean
        });
    })()},"ipv4":${$string(input.ipv4)},"email":${$string(input.email)}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, TemplateAtomic.SPOILERS);
