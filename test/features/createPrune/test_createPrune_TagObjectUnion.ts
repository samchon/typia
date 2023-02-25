import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TagObjectUnion = _test_prune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createPrune<TagObjectUnion>(),
);
