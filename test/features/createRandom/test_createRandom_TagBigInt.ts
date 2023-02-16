import typia from "typia";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TagBigInt = _test_random(
    "TagBigInt",
    typia.createRandom<TagBigInt>(),
    typia.createAssert<typia.Primitive<TagBigInt>>(),
);
