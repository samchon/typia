import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createValidatePrune_ConstantConstEnumeration =
    _test_validatePrune(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.createValidatePrune<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
