import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TagAtomicUnion = _test_assertClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.assertClone(input),
    TagAtomicUnion.SPOILERS,
);