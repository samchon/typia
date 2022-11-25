import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagAtomicUnion = _test_assert(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => TSON.assert(input),
    TagAtomicUnion.SPOILERS,
);