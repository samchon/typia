import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_TagObjectUnion = _test_assertClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.assertClone(input),
    TagObjectUnion.SPOILERS,
);
