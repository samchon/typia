import typia from "../../../src";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_TagAtomicUnion = _test_validateClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.validateClone(input),
    TagAtomicUnion.SPOILERS,
);
