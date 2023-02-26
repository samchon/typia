import typia from "../../../../src";
import { TagTuple } from "../../../structures/TagTuple";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagTuple = _test_prune(
    "TagTuple",
    TagTuple.generate,
    (input) =>
        ((input: TagTuple): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("tuple" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        })(input),
);
