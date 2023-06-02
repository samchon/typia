import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_TagType = _test_random(
    "TagType",
    typia.createRandom<TagType>(),
typia.createAssert<typia.Primitive<TagType>>(),
);
