import typia from "../../../src";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TagAtomicUnion = _test_validateParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createValidateParse<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
