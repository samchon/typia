import typia from "../../../src";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagAtomicUnion = _test_validatePrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.validatePrune(input),
    TagAtomicUnion.SPOILERS,
);
