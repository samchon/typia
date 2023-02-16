import typia from "typia";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TagAtomicUnion = _test_assertParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createAssertParse<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
