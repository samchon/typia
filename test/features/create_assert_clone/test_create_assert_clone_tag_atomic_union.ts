import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_tag_atomic_union = _test_assert_clone(
    "atomic union tag",
    TagAtomicUnion.generate,
    TSON.createAssertClone<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
