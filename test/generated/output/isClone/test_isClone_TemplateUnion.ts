import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_isClone_TemplateUnion = _test_isClone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TemplateUnion.Type>> | null => {
            const is: any = (
                input: any,
            ): input is Array<TemplateUnion.Type> => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.prefix &&
                    (RegExp(/^prefix_(.*)/).test(input.prefix) ||
                        RegExp(/^prefix_-?\d+\.?\d*$/).test(input.prefix)) &&
                    "string" === typeof input.postfix &&
                    (RegExp(/(.*)_postfix$/).test(input.postfix) ||
                        RegExp(/^-?\d+\.?\d*_postfix$/).test(input.postfix)) &&
                    ("the_false_value" === input.middle ||
                        "the_true_value" === input.middle ||
                        ("string" === typeof input.middle &&
                            RegExp(/^the_-?\d+\.?\d*_value$/).test(
                                input.middle,
                            ))) &&
                    null !== input.mixed &&
                    undefined !== input.mixed &&
                    ("the_A_value" === input.mixed ||
                        "the_B_value" === input.mixed ||
                        ("number" === typeof input.mixed &&
                            Number.isFinite(input.mixed)) ||
                        "boolean" === typeof input.mixed ||
                        ("string" === typeof input.mixed &&
                            RegExp(/^the_-?\d+\.?\d*_value$/).test(
                                input.mixed,
                            )) ||
                        ("object" === typeof input.mixed &&
                            null !== input.mixed &&
                            $io1(input.mixed)));
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.name;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const clone: any = (
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
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    TemplateUnion.SPOILERS,
);
