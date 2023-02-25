import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_prune } from "../internal/_test_prune";
export const test_prune_DynamicConstant = _test_prune("DynamicConstant", DynamicConstant.generate, (input) => ((input: DynamicConstant): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("a" === key || "b" === key || "c" === key || "d" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
})(input));
