import typia from "typia";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TagAtomicUnion = _test_assertStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createAssertStringify<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
