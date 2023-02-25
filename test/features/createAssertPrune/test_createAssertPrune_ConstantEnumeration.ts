import typia from "../../../src";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ConstantEnumeration = _test_assertPrune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createAssertPrune<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
