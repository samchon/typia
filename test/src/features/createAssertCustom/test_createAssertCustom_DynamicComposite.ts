import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_DynamicComposite = _test_assert(CustomGuardError)(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)(typia.createAssert<DynamicComposite>((p) => new CustomGuardError(p)));
