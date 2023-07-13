import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagArray } from "../../structures/TagArray";

export const test_misc_validatePrune_TagArray = _test_misc_validatePrune(
    "TagArray",
    TagArray.generate,
    typia.misc.createValidatePrune<TagArray>(),
    TagArray.SPOILERS,
);
