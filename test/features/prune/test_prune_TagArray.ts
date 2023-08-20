import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagArray } from "../../structures/TagArray";

export const test_prune_TagArray = _test_prune(
    "TagArray",
    TagArray.generate,
    (input) => typia.prune<TagArray>(input),
);
