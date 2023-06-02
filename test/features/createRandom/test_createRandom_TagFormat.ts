import typia from "../../../src";

import { TagFormat } from "../../structures/TagFormat";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_TagFormat = _test_random(
    "TagFormat",
    typia.createRandom<TagFormat>(),
typia.createAssert<typia.Primitive<TagFormat>>(),
);
