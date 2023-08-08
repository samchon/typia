import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_validatePrune_ConstantConstEnumeration =
    _test_misc_validatePrune(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.misc.createValidatePrune<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
