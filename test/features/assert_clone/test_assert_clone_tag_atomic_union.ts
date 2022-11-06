import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_tag_atomic_union = _test_assert_clone(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.assertClone(input),
    TagAtomicUnion.SPOILERS,
);
