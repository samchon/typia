import typia from "../../../src";

import { TagRange } from "../../structures/TagRange";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagRange = _test_prune(
    "TagRange",
    TagRange.generate,
    (input) => typia.prune(input),
);
