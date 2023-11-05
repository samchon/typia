import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_createValidatePrune_DynamicTag =
    _test_misc_validatePrune("DynamicTag")<DynamicTag>(DynamicTag)(
        typia.misc.createValidatePrune<DynamicTag>(),
    );
