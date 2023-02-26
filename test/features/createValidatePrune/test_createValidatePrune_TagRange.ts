import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagRange } from "../../structures/TagRange";

export const test_createValidatePrune_TagRange = _test_validatePrune(
    "TagRange",
    TagRange.generate,
    typia.createValidatePrune<TagRange>(),
    TagRange.SPOILERS,
);
