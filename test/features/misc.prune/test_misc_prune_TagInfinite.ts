import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_misc_prune_TagInfinite = _test_misc_prune(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.misc.prune(input),
);
