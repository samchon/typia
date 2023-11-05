import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_validatePrune_DynamicTag = _test_misc_validatePrune(
    "DynamicTag",
)<DynamicTag>(DynamicTag)((input) =>
    typia.misc.validatePrune<DynamicTag>(input),
);
