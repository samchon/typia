import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeUnion } from "../../structures/NativeUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_NativeUnion = (): void => _test_assert(TypeGuardError)(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)(typia.createAssert<NativeUnion>());
