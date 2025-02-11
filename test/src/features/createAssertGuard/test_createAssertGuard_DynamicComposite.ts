import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_DynamicComposite = _test_assertGuard(TypeGuardError)(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)(typia.createAssertGuard<DynamicComposite>());
