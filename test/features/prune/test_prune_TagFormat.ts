import typia from "typia";

import { TagFormat } from "../../structures/TagFormat";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagFormat = _test_prune(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.prune(input),
);
