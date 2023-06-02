import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createAssertClone_TagAtomicUnion = _test_assertClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createAssertClone<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
