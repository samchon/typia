import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createAssertParse_TagAtomicUnion = _test_assertParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createAssertParse<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
