import typia from "../../../src";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ArraySimple = _test_prune(
    "ArraySimple",
    ArraySimple.generate,
    typia.createPrune<ArraySimple>(),
);
