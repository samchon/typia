import typia from "../../../src";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_random } from "../../internal/_test_random";

export const test_random_TagBigInt = _test_random(
    "TagBigInt",
    () => typia.random<TagBigInt>(),
typia.createAssert<typia.Primitive<TagBigInt>>(),
);
