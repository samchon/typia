import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagArray } from "../../structures/TagArray";

export const test_createValidatePrune_TagArray = _test_validatePrune(
    "TagArray",
    TagArray.generate,
    typia.createValidatePrune<TagArray>(),
    TagArray.SPOILERS,
);
