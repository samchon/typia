import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_prune } from "../internal/_test_prune";
export const test_createPrune_TagStep = _test_prune("TagStep", TagStep.generate, (input: TagStep): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("exclusiveMinimum" === key || "minimum" === key || "range" === key || "multipleOf" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
});
