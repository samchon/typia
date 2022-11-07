import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_tag_atomic_union = _test_assert_type(
    "atomic union tag",
    TagAtomicUnion.generate,
    TSON.createAssertType<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
