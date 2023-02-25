import typia from "../../../../src";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_DynamicTemplate = _test_prune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) =>
        ((input: DynamicTemplate): void => {
            const $join = (typia.prune as any).join;
            const $po0 = (input: any): any => {
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
        })(input),
);
