import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_tag_atomic_union = _test_assert(
    "atomic union tag",
    TagAtomicUnion.generate,
    TSON.createAssert<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
