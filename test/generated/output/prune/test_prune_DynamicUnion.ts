import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_prune } from "../internal/_test_prune";
export const test_prune_DynamicUnion = _test_prune("DynamicUnion", DynamicUnion.generate, (input) => ((input: DynamicUnion): void => {
    const $join = (typia.prune as any).join;
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if (RegExp(/^-?\d+\.?\d*$/).test(key) || RegExp(/^(prefix_(.*))/).test(key) || RegExp(/((.*)_postfix)$/).test(key) || RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
})(input));
