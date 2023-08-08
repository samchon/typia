import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_misc_assertClone_TagObjectUnion = _test_misc_assertClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.misc.createAssertClone<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
