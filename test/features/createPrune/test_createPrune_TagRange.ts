import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagRange } from "../../structures/TagRange";

export const test_createPrune_TagRange = _test_prune(
    "TagRange",
    TagRange.generate,
    typia.createPrune<TagRange>(),
);
