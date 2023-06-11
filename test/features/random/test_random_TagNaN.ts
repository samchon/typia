import typia from "../../../src";

import { TagNaN } from "../../structures/TagNaN";
import { _test_random } from "../../internal/_test_random";

export const test_random_TagNaN = _test_random(
    "TagNaN",
    () => typia.random<TagNaN>(),
typia.createAssert<typia.Primitive<TagNaN>>(),
);
