import typia from "typia";

import { TagRange } from "../../structures/TagRange";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TagRange = _test_random(
    "TagRange",
    typia.createRandom<TagRange>(),
    typia.createAssert<typia.Primitive<TagRange>>(),
);
