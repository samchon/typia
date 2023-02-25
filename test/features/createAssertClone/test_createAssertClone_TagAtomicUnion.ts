import typia from "../../../src";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TagAtomicUnion = _test_assertClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createAssertClone<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
