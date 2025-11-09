import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_createAssert_DynamicTemplate = (): void => _test_assert(TypeGuardError)(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)(typia.createAssert<DynamicTemplate>());
