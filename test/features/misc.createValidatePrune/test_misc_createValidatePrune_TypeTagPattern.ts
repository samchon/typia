import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_createValidatePrune_TypeTagPattern =
    _test_misc_validatePrune("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
        typia.misc.createValidatePrune<TypeTagPattern>(),
    );
