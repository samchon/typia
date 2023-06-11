import typia from "../../../src";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_TagAtomicUnion = _test_is(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createIs<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
