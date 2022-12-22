import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagAtomicUnion = _test_isStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createIsStringify<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
