import typia from "../../../src";

import { TagRange } from "../../structures/TagRange";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TagRange = _test_prune(
    "TagRange",
    TagRange.generate,
    typia.createPrune<TagRange>(),
);
