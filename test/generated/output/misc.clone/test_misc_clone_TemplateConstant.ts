import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_misc_clone_TemplateConstant = _test_misc_clone(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) =>
        ((
            input: Array<TemplateConstant.Type>,
        ): typia.Primitive<Array<TemplateConstant.Type>> => {
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co0(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                prefix: input.prefix as any,
                postfix: input.postfix as any,
                combined: input.combined as any,
            });
            return Array.isArray(input) ? $cp0(input) : (input as any);
        })(input),
);
