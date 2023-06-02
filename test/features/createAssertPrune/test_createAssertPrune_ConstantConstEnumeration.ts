import typia from "../../../src";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_ConstantConstEnumeration = _test_assertPrune(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createAssertPrune<ConstantConstEnumeration>(),
    ConstantConstEnumeration.SPOILERS,
);
