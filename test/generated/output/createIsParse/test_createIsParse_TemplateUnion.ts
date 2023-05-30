import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { TemplateUnion } from "../../../structures/TemplateUnion";
export const test_createIsParse_TemplateUnion = _test_isParse("TemplateUnion", TemplateUnion.generate, (input: any): typia.Primitive<TemplateUnion> => { const is = (input: any): input is TemplateUnion => {
    const $io0 = (input: any): boolean => "string" === typeof input.prefix && (RegExp(/^prefix_(.*)/).test(input.prefix) || RegExp(/^prefix_-?\d+\.?\d*$/).test(input.prefix)) && ("string" === typeof input.postfix && (RegExp(/(.*)_postfix$/).test(input.postfix) || RegExp(/^-?\d+\.?\d*_postfix$/).test(input.postfix))) && ("the_false_value" === input.middle || "the_true_value" === input.middle || "string" === typeof input.middle && RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle)) && (null !== input.mixed && undefined !== input.mixed && ("the_A_value" === input.mixed || "the_B_value" === input.mixed || "number" === typeof input.mixed && Number.isFinite(input.mixed) || "boolean" === typeof input.mixed || "string" === typeof input.mixed && RegExp(/^the_-?\d+\.?\d*_value$/).test(input.mixed) || "object" === typeof input.mixed && null !== input.mixed && $io1(input.mixed)));
    const $io1 = (input: any): boolean => "string" === typeof input.name;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, TemplateUnion.SPOILERS);
