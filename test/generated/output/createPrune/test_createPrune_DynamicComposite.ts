import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_createPrune_DynamicComposite = _test_prune(
    "DynamicComposite",
    DynamicComposite.generate,
    (input: DynamicComposite): void => {
        const $join = (typia.createPrune as any).join;
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "id" === key ||
                    "name" === key ||
                    RegExp(/^-?\d+\.?\d*$/).test(key) ||
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
