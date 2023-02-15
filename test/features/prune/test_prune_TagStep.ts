import typia from "typia";

import { TagStep } from "../../structures/TagStep";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagStep = _test_prune(
    "TagStep",
    TagStep.generate,
    (input) => typia.prune(input),
);
