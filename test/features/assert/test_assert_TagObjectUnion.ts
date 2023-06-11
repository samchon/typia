import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_TagObjectUnion = _test_assert(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.assert(input),
    TagObjectUnion.SPOILERS,
);
