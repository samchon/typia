import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_clone_TemplateUnion = _test_clone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) =>
        ((
            input: Array<TemplateUnion.Type>,
        ): typia.Primitive<Array<TemplateUnion.Type>> => {
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.name;
            const $co0: any = (input: any): any => ({
                prefix: input.prefix as any,
                postfix: input.postfix as any,
                middle: input.middle as any,
                mixed:
                    "object" === typeof input.mixed && null !== input.mixed
                        ? $co1(input.mixed)
                        : (input.mixed as any),
            });
            const $co1: any = (input: any): any => ({
                name: input.name as any,
            });
            return Array.isArray(input)
                ? (() =>
                      input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      ))()
                : (input as any);
        })(input),
);
