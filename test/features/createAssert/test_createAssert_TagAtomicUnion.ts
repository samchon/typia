import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagAtomicUnion = _test_assert(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createAssert<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);