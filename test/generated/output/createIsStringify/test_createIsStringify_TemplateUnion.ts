import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_createIsStringify_TemplateUnion = _test_isStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    (input: TemplateUnion): string | null => {
        const is = (input: any): input is TemplateUnion => {
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
                        RegExp(/^the_-?\d+\.?\d*_value$/).test(input.mixed)) ||
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
        const stringify = (input: TemplateUnion): string => {
            const $string = (typia.createIsStringify as any).string;
            const $number = (typia.createIsStringify as any).number;
            const $throws = (typia.createIsStringify as any).throws;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name;
            const $so0 = (input: any): any =>
                `{"prefix":${$string(input.prefix)},"postfix":${$string(
                    input.postfix,
                )},"middle":${$string(input.middle)},"mixed":${(() => {
                    if ("string" === typeof input.mixed)
                        return $string(input.mixed);
                    if ("number" === typeof input.mixed)
                        return $number(input.mixed);
                    if ("boolean" === typeof input.mixed) return input.mixed;
                    if ("object" === typeof input.mixed && null !== input.mixed)
                        return `{"name":${$string(input.mixed.name)}}`;
                    $throws({
                        expected:
                            '("the_A_value" | "the_B_value" | Resolve<__type> | `the_${number}_value` | boolean | number)',
                        value: input.mixed,
                    });
                })()}}`;
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    TemplateUnion.SPOILERS,
);
