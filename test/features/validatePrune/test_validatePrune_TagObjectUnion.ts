import typia from "typia";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagObjectUnion = _test_validatePrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.validatePrune(input),
    TagObjectUnion.SPOILERS,
);
