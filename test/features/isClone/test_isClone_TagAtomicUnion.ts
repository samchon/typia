import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_isClone_TagAtomicUnion = _test_isClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.isClone(input),
    TagAtomicUnion.SPOILERS,
);
