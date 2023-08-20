import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_assertClone_TagAtomicUnion = _test_assertClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.assertClone<TagAtomicUnion>(input),
    TagAtomicUnion.SPOILERS,
);
