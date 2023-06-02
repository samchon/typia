import typia from "../../../src";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_prune } from "../../internal/_test_prune";

export const test_createPrune_ArrayRecursive = _test_prune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createPrune<ArrayRecursive>(),
);
