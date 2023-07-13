import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_misc_assertClone_TagAtomicUnion = _test_misc_assertClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.misc.assertClone(input),
    TagAtomicUnion.SPOILERS,
);
