import typia from "../../../src";

import { TagArray } from "../../structures/TagArray";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagArray = _test_prune(
    "TagArray",
    TagArray.generate,
    (input) => typia.prune(input),
);
