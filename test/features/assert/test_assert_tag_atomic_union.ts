import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_atomic_union = _test_assert(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.assert(input),
    TagAtomicUnion.SPOILERS,
);
