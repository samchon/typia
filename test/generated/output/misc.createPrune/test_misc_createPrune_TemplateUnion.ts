import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_misc_createPrune_TemplateUnion = _test_misc_prune(
    "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input: TemplateUnion): void => {
    const $io1 = (input: any): boolean =>
        "string" === typeof input.prefix &&
        (RegExp(/^prefix_(.*)/).test(input.prefix) ||
            RegExp(/^prefix_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                input.prefix,
            )) &&
        "string" === typeof input.postfix &&
        (RegExp(/(.*)_postfix$/).test(input.postfix) ||
            RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_postfix$/).test(
                input.postfix,
            )) &&
        null !== input.middle &&
        undefined !== input.middle &&
        ("the_false_value" === input.middle ||
            "the_true_value" === input.middle ||
            ("string" === typeof input.middle &&
                RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
                    input.middle,
                ))) &&
        null !== input.mixed &&
        undefined !== input.mixed &&
        ("the_A_value" === input.mixed ||
            "the_B_value" === input.mixed ||
            "number" === typeof input.mixed ||
            "boolean" === typeof input.mixed ||
            ("string" === typeof input.mixed &&
                RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
                    input.mixed,
                )) ||
            ("object" === typeof input.mixed &&
                null !== input.mixed &&
                $io2(input.mixed)));
    const $io2 = (input: any): boolean => "string" === typeof input.name;
    const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po1(elem);
        });
    const $po0 = (input: any): any => {
        if (Array.isArray(input.value)) $pp0(input.value);
        for (const key of Object.keys(input)) {
            if ("value" === key) continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        if ("object" === typeof input.mixed && null !== input.mixed)
            $po2(input.mixed);
        for (const key of Object.keys(input)) {
            if (
                "prefix" === key ||
                "postfix" === key ||
                "middle" === key ||
                "mixed" === key
            )
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("name" === key) continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
