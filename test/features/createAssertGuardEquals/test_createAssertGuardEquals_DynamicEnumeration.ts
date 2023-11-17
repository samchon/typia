import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertGuardEquals_DynamicEnumeration =
    _test_assertGuardEquals("DynamicEnumeration")<DynamicEnumeration>(
        DynamicEnumeration,
    )(typia.createAssertGuardEquals<DynamicEnumeration>());
