import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createAssert_TagAtomicUnion = _test_assert(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createAssert<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
