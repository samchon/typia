import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagPattern } from "../../structures/TagPattern";

export const test_misc_prune_TagPattern = _test_misc_prune(
    "TagPattern",
    TagPattern.generate,
    typia.misc.createPrune<TagPattern>(),
);
