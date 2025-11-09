import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_DynamicComposite = (): void => _test_assertGuard(CustomGuardError)(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)(typia.createAssertGuard<DynamicComposite>((p) => new CustomGuardError(p)));
