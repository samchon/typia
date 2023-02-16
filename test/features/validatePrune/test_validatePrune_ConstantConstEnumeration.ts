import typia from "typia";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ConstantConstEnumeration = _test_validatePrune(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.validatePrune(input),
    ConstantConstEnumeration.SPOILERS,
);
