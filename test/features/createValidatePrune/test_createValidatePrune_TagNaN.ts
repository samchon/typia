import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagNaN } from "../../structures/TagNaN";

export const test_createValidatePrune_TagNaN = _test_validatePrune(
    "TagNaN",
    TagNaN.generate,
    typia.createValidatePrune<TagNaN>(),
    TagNaN.SPOILERS,
);
