import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagNaN } from "../../../structures/TagNaN";

export const test_prune_TagNaN = _test_prune(
    "TagNaN",
    TagNaN.generate,
    (input) =>
        ((input: TagNaN): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if (
                        "value" === key ||
                        "ranged" === key ||
                        "minimum" === key ||
                        "maximum" === key ||
                        "multipleOf" === key ||
                        "typed" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        })(input),
);
