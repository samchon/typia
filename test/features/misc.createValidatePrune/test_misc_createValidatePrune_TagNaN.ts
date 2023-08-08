import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagNaN } from "../../structures/TagNaN";

export const test_misc_validatePrune_TagNaN = _test_misc_validatePrune(
    "TagNaN",
    TagNaN.generate,
    typia.misc.createValidatePrune<TagNaN>(),
    TagNaN.SPOILERS,
);
