import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_tag_atomic_union = _test_assert_type(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.assertType(input),
    TagAtomicUnion.SPOILERS,
);
