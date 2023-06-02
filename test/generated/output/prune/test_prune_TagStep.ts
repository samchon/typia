import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagStep } from "../../../structures/TagStep";

export const test_prune_TagStep = _test_prune(
    "TagStep",
    TagStep.generate,
    (input) =>
        ((input: Array<TagStep.Type>): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
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
            if (Array.isArray(input))
                (() =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    }))();
        })(input),
);
