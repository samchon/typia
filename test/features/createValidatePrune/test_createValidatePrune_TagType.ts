import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_createValidatePrune_TagType = _test_validatePrune(
    "TagType",
    TagType.generate,
    typia.createValidatePrune<TagType>(),
    TagType.SPOILERS,
);
