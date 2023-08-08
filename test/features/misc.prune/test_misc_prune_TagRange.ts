import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagRange } from "../../structures/TagRange";

export const test_misc_prune_TagRange = _test_misc_prune(
    "TagRange",
    TagRange.generate,
    (input) => typia.misc.prune(input),
);
