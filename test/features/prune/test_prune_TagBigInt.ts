import typia from "typia";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagBigInt = _test_prune(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.prune(input),
);
