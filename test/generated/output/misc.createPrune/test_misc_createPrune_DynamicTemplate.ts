import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_misc_prune_DynamicTemplate = _test_misc_prune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input: DynamicTemplate): void => {
        const $join = (typia.misc.createPrune as any).join;
        const $po0 = (input: any): any => {
            Object.entries(input).forEach(([key, value]: any) => {
                if (undefined === value) return;
                if (RegExp(/^(prefix_(.*))/).test(key)) {
                }
                if (RegExp(/((.*)_postfix)$/).test(key)) {
                }
                if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key)) {
                }
                if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)) {
                }
            });
            for (const key of Object.keys(input)) {
                if (
                    RegExp(/^(prefix_(.*))/).test(key) ||
                    RegExp(/((.*)_postfix)$/).test(key) ||
                    RegExp(/^(value_-?\d+\.?\d*)$/).test(key) ||
                    RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    },
);
