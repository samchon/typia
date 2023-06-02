import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_createValidatePrune_TagObjectUnion = _test_validatePrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createValidatePrune<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
