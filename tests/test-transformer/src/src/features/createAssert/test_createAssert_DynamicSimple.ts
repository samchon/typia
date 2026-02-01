import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_createAssert_DynamicSimple = (): void => _test_assert(TypeGuardError)(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.createAssert<DynamicSimple>());
