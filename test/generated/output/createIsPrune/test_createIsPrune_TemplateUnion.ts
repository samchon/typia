import typia from "../../../../src";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TemplateUnion = _test_isPrune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input: any): input is TemplateUnion => {
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
        const prune = (input: TemplateUnion): void => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name;
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
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    TemplateUnion.SPOILERS,
);
