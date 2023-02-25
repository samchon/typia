import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_TemplateUnion = _test_isStringify("TemplateUnion", TemplateUnion.generate, (input) => ((input: TemplateUnion): string | null => { const is = (input: any): input is TemplateUnion => {
    const $io0 = (input: any) => "string" === typeof input.prefix && (true === RegExp(/^prefix_(.*)/).test(input.prefix) || true === RegExp(/^prefix_-?\d+\.?\d*$/).test(input.prefix)) && ("string" === typeof input.postfix && (true === RegExp(/(.*)_postfix$/).test(input.postfix) || true === RegExp(/^-?\d+\.?\d*_postfix$/).test(input.postfix))) && ("the_false_value" === input.middle || "the_true_value" === input.middle || "string" === typeof input.middle && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle)) && (null !== input.mixed && undefined !== input.mixed && ("the_A_value" === input.mixed || "the_B_value" === input.mixed || "number" === typeof input.mixed && !Number.isNaN(input.mixed) || "boolean" === typeof input.mixed || "string" === typeof input.mixed && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.mixed) || "object" === typeof input.mixed && null !== input.mixed && $io1(input.mixed)));
    const $io1 = (input: any) => "string" === typeof input.name;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: TemplateUnion): string => {
    const $string = (typia.isStringify as any).string;
    const $throws = (typia.isStringify as any).throws;
    const $io1 = (input: any) => "string" === typeof input.name;
    const $so0 = (input: any) => `{"prefix":${$string(input.prefix)},"postfix":${$string(input.postfix)},"middle":${$string(input.middle)},"mixed":${(() => {
        if ("string" === typeof input.mixed)
            return $string(input.mixed);
        if ("number" === typeof input.mixed)
            return input.mixed;
        if ("boolean" === typeof input.mixed)
            return input.mixed;
        if ("object" === typeof input.mixed && null !== input.mixed)
            return `{"name":${$string(input.mixed.name)}}`;
        $throws({
            expected: "(\"the_A_value\" | \"the_B_value\" | Resolve<__type> | `the_${number}_value` | boolean | number)",
            value: input.mixed
        });
    })()}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; return is(input) ? stringify(input) : null; })(input), TemplateUnion.SPOILERS);
