import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_random } from "../internal/_test_random";

export const test_random_TagType = _test_random(
    "TagType",
    () => typia.random<TagType>(),
    typia.createAssert<typia.Primitive<TagType>>(),
);
