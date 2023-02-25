import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagPattern = _test_prune(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.prune(input),
);
