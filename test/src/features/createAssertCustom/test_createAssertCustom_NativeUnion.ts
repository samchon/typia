import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_createAssertCustom_NativeUnion = _test_assert(
  CustomGuardError,
)("NativeUnion")<NativeUnion>(NativeUnion)(
  typia.createAssert<NativeUnion>((p) => new CustomGuardError(p)),
);
