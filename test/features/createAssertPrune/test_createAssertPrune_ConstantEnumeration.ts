import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssertPrune_ConstantEnumeration = _test_assertPrune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createAssertPrune<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
