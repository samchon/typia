import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_tag_atomic_union = _test_assert_equals(
    "atomic union tag",
    TagAtomicUnion.generate,
    TSON.createAssertEquals<TagAtomicUnion>(),
);
