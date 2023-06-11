import typia from "../../../src";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_prune } from "../../internal/_test_prune";

export const test_createPrune_TagBigInt = _test_prune(
    "TagBigInt",
    TagBigInt.generate,
    typia.createPrune<TagBigInt>(),
);
