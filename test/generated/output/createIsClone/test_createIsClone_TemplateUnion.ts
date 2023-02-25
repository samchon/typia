import typia from "../../../../src";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TemplateUnion = _test_isClone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input: any): typia.Primitive<TemplateUnion> | null => {
        const is = (input: any): input is TemplateUnion => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.prefix &&
                (true === RegExp(/^prefix_(.*)/).test(input.prefix) ||
                    true ===
                        RegExp(/^prefix_-?\d+\.?\d*$/).test(input.prefix)) &&
                "string" === typeof input.postfix &&
                (true === RegExp(/(.*)_postfix$/).test(input.postfix) ||
                    true ===
                        RegExp(/^-?\d+\.?\d*_postfix$/).test(input.postfix)) &&
                ("the_false_value" === input.middle ||
                    "the_true_value" === input.middle ||
                    ("string" === typeof input.middle &&
                        true ===
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
                        true ===
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
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const clone = (
            input: TemplateUnion,
        ): typia.Primitive<TemplateUnion> => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name;
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
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co0(elem)
                          : (elem as any),
                  )
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
    TemplateUnion.SPOILERS,
);
