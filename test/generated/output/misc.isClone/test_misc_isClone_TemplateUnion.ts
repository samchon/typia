import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_misc_isClone_TemplateUnion =
    _test_misc_isClone<TemplateUnion>(TemplateUnion)((input) =>
        ((input: any): typia.Primitive<Array<TemplateUnion.Type>> | null => {
            const is = (input: any): input is Array<TemplateUnion.Type> => {
                const $io0 = (input: any): boolean =>
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
                const $io1 = (input: any): boolean =>
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
            const clone = (
                input: Array<TemplateUnion.Type>,
            ): typia.Primitive<Array<TemplateUnion.Type>> => {
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name;
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co0(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    prefix: input.prefix as any,
                    postfix: input.postfix as any,
                    middle: input.middle as any,
                    mixed:
                        "object" === typeof input.mixed && null !== input.mixed
                            ? $co1(input.mixed)
                            : (input.mixed as any),
                });
                const $co1 = (input: any): any => ({
                    name: input.name as any,
                });
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    );
