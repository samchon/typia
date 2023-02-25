import typia from "../../../src";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TagInfinite = _test_prune(
    "TagInfinite",
    TagInfinite.generate,
    typia.createPrune<TagInfinite>(),
);
