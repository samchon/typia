import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_validatePrune_DynamicConstant =
    _test_misc_validatePrune<DynamicConstant>(DynamicConstant)(
        typia.misc.createValidatePrune<DynamicConstant>(),
    );
