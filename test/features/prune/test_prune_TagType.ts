import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_TagType = _test_prune(
    "TagType",
    TagType.generate,
    (input) => typia.prune(input),
);
