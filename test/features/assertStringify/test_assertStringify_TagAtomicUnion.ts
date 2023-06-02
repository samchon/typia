import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_assertStringify_TagAtomicUnion = _test_assertStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.assertStringify(input),
    TagAtomicUnion.SPOILERS,
);
