import typia from "../../../src";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_DynamicUnion = _test_prune(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.prune(input),
);
