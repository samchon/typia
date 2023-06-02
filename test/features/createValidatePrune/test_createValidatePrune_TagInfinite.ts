import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_createValidatePrune_TagInfinite = _test_validatePrune(
    "TagInfinite",
    TagInfinite.generate,
    typia.createValidatePrune<TagInfinite>(),
    TagInfinite.SPOILERS,
);
