import typia from "../../../src";

import { TagPattern } from "../../structures/TagPattern";
import { _test_random } from "../internal/_test_random";

export const test_random_TagPattern = _test_random(
    "TagPattern",
    () => typia.random<TagPattern>(),
    typia.createAssert<typia.Primitive<TagPattern>>(),
);
