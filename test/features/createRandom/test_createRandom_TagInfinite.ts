import typia from "../../../src";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_TagInfinite = _test_random(
    "TagInfinite",
    typia.createRandom<TagInfinite>(),
typia.createAssert<typia.Primitive<TagInfinite>>(),
);
