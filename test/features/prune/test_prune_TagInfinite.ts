import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_prune_TagInfinite = _test_prune(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.prune<TagInfinite>(input),
);
