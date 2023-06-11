import typia from "../../../../src";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_clone } from "../../../internal/_test_clone";
export const test_clone_TemplateUnion = _test_clone("TemplateUnion", TemplateUnion.generate, (input) => ((input: Array<TemplateUnion.Type>): typia.Primitive<Array<TemplateUnion.Type>> => {
    const $io1 = (input: any): boolean => "string" === typeof input.name;
    const $cp0 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any);
    const $co0 = (input: any): any => ({
        prefix: input.prefix as any,
        postfix: input.postfix as any,
        middle: input.middle as any,
        mixed: "object" === typeof input.mixed && null !== input.mixed ? $co1(input.mixed) : input.mixed as any
    });
    const $co1 = (input: any): any => ({
        name: input.name as any
    });
    return Array.isArray(input) ? $cp0(input) : input as any;
})(input));
