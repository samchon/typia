import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_misc_isPrune_TemplateUnion =
    _test_misc_isPrune<TemplateUnion>(TemplateUnion)(
        (input: any): input is TemplateUnion => {
            const is = (input: any): input is TemplateUnion => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.prefix &&
                    (RegExp(/^prefix_(.*)/).test(input.prefix) ||
                        RegExp(
                            /^prefix_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                        ).test(input.prefix)) &&
                    "string" === typeof input.postfix &&
                    (RegExp(/(.*)_postfix$/).test(input.postfix) ||
                        RegExp(
                            /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_postfix$/,
                        ).test(input.postfix)) &&
                    ("the_false_value" === input.middle ||
                        "the_true_value" === input.middle ||
                        ("string" === typeof input.middle &&
                            RegExp(
                                /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                            ).test(input.middle))) &&
                    null !== input.mixed &&
                    undefined !== input.mixed &&
                    ("the_A_value" === input.mixed ||
                        "the_B_value" === input.mixed ||
                        ("number" === typeof input.mixed &&
                            Number.isFinite(input.mixed)) ||
                        "boolean" === typeof input.mixed ||
                        ("string" === typeof input.mixed &&
                            RegExp(
                                /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                            ).test(input.mixed)) ||
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
            const prune = (input: TemplateUnion): void => {
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name;
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
                const $po0 = (input: any): any => {
                    if ("object" === typeof input.mixed && null !== input.mixed)
                        $po1(input.mixed);
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
                const $po1 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("name" === key) continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input)) $pp0(input);
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        },
    );
