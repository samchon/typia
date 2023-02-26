import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_assertClone_TagObjectUnion = _test_assertClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.assertClone(input),
    TagObjectUnion.SPOILERS,
);
