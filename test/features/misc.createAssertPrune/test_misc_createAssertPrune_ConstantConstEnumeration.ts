import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_createAssertPrune_ConstantConstEnumeration =
    _test_misc_assertPrune(
        "ConstantConstEnumeration",
    )<ConstantConstEnumeration>(ConstantConstEnumeration)(
        typia.misc.createAssertPrune<ConstantConstEnumeration>(),
    );
