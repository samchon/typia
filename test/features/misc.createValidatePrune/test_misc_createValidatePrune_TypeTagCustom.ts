import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_validatePrune_TypeTagCustom = _test_misc_validatePrune(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(
    typia.misc.createValidatePrune<TypeTagCustom>(),
);
