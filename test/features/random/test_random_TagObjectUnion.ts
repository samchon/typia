import typia from "typia";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_random } from "../internal/_test_random";

export const test_random_TagObjectUnion = _test_random(
    "TagObjectUnion",
    () => typia.random<TagObjectUnion>(),
    typia.createAssert<typia.Primitive<TagObjectUnion>>(),
);
