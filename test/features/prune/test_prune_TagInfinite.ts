import typia from "../../../src";
import { TagInfinite } from "../../structures/TagInfinite";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagInfinite = _test_prune(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.prune(input),
);