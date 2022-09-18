import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_tag_atomic_union = _test_assert_equals(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.assertEquals(input),
);
