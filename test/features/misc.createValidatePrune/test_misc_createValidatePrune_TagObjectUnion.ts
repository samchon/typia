import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_misc_validatePrune_TagObjectUnion = _test_misc_validatePrune(
    "TagObjectUnion",
)<TagObjectUnion>(TagObjectUnion)(
    typia.misc.createValidatePrune<TagObjectUnion>(),
);
