import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagAtomicUnion = _test_equals(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.equals(input),
);
