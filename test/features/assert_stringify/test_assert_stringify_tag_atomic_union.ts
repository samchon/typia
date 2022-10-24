import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_tag_atomic_union = _test_assert_stringify(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.assertStringify(input),
    TagAtomicUnion.SPOILERS,
);
