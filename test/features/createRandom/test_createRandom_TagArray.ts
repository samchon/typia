import typia from "../../../src";

import { TagArray } from "../../structures/TagArray";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TagArray = _test_random(
    "TagArray",
    typia.createRandom<TagArray>(),
    typia.createAssert<typia.Primitive<TagArray>>(),
);
