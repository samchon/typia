import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTag } from "../../structures/DynamicTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_DynamicTag = (): void => _test_assert(CustomGuardError)(
    "DynamicTag",
)<DynamicTag>(
    DynamicTag
)((input) => typia.assert<DynamicTag>(input, (p) => new CustomGuardError(p)));
