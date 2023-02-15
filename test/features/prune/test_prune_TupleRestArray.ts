import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TupleRestArray = _test_prune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.prune(input),
);
