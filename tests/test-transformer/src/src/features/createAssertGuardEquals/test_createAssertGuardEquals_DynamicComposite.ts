import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_DynamicComposite = (): void => _test_assertGuardEquals(TypeGuardError)(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)(typia.createAssertGuardEquals<DynamicComposite>());
