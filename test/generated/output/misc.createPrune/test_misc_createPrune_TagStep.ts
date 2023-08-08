import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagStep } from "../../../structures/TagStep";

export const test_misc_prune_TagStep = _test_misc_prune(
    "TagStep",
    TagStep.generate,
    (input: TagStep): void => {
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po0(elem);
            });
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "exclusiveMinimum" === key ||
                    "minimum" === key ||
                    "range" === key ||
                    "multipleOf" === key
                )
                    continue;
                delete input[key];
            }
        };
        if (Array.isArray(input)) $pp0(input);
    },
);
