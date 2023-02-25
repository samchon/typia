import typia from "../../../src";

import { TagNaN } from "../../structures/TagNaN";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TagNaN = _test_random(
    "TagNaN",
    typia.createRandom<TagNaN>(),
    typia.createAssert<typia.Primitive<TagNaN>>(),
);
