import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createAssertStringify_TagAtomicUnion = _test_assertStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createAssertStringify<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
