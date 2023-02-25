import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TemplateConstant = _test_clone("TemplateConstant", TemplateConstant.generate, (input) => ((input: Type[]): typia.Primitive<Type[]> => {
    const $co0 = (input: any) => ({
        prefix: input.prefix,
        postfix: input.postfix,
        combined: input.combined
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
})(input));
