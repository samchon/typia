import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TemplateUnion = _test_clone("TemplateUnion", TemplateUnion.generate, (input) => ((input: TemplateUnion): typia.Primitive<TemplateUnion> => {
    const $io1 = (input: any) => "string" === typeof input.name;
    const $co0 = (input: any) => ({
        prefix: input.prefix,
        postfix: input.postfix,
        middle: input.middle,
        mixed: "object" === typeof input.mixed && null !== input.mixed ? $co1(input.mixed) : input.mixed
    });
    const $co1 = (input: any) => ({
        name: input.name
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
})(input));
