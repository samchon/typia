import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createValidateParse_TagAtomicUnion = _test_validateParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createValidateParse<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
