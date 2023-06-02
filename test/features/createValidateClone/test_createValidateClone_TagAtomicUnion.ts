import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createValidateClone_TagAtomicUnion = _test_validateClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createValidateClone<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
