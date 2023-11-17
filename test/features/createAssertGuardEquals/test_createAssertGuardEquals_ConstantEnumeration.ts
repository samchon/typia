import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createAssertGuardEquals_ConstantEnumeration =
    _test_assertGuardEquals("ConstantEnumeration")<ConstantEnumeration>(
        ConstantEnumeration,
    )(typia.createAssertGuardEquals<ConstantEnumeration>());
