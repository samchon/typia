import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_validateClone_TagAtomicUnion = _test_validateClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.validateClone<TagAtomicUnion>(input),
    TagAtomicUnion.SPOILERS,
);
