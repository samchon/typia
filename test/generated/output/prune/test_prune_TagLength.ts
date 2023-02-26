import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagLength } from "../../../structures/TagLength";

export const test_prune_TagLength = _test_prune(
    "TagLength",
    TagLength.generate,
    (input) =>
        ((input: Array<TagLength.Type>): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "fixed" === key ||
                        "minimum" === key ||
                        "maximum" === key ||
                        "minimum_and_maximum" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        })(input),
);
