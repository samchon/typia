import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicNever } from "../../structures/DynamicNever";

import { TypeGuardError } from "typia";

export const test_createAssert_DynamicNever = (): void => _test_assert(TypeGuardError)(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)(typia.createAssert<DynamicNever>());
