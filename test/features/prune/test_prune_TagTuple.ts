import typia from "typia";

import { TagTuple } from "../../structures/TagTuple";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagTuple = _test_prune(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.prune(input),
);
