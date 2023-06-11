import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createAssertPrune_ConstantConstEnumeration =
    _test_assertPrune(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.createAssertPrune<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
