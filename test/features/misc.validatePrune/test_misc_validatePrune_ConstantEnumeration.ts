import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_validatePrune_ConstantEnumeration =
    _test_misc_validatePrune(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        (input) => typia.misc.validatePrune(input),
        ConstantEnumeration.SPOILERS,
    );
