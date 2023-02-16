import typia from "typia";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_DynamicUnion = _test_prune(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createPrune<DynamicUnion>(),
);
