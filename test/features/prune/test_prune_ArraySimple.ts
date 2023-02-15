import typia from "typia";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ArraySimple = _test_prune(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.prune(input),
);
