import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_validatePrune_TypeTagInfinite = _test_misc_validatePrune(
    "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)(
    typia.misc.createValidatePrune<TypeTagInfinite>(),
);
