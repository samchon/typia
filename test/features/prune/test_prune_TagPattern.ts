import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagPattern } from "../../structures/TagPattern";

export const test_prune_TagPattern = _test_prune(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.prune<TagPattern>(input),
);
