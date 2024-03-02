import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_createAssertCustom_NativeAlias = _test_assert(
  CustomGuardError,
)("NativeAlias")<NativeAlias>(NativeAlias)(
  typia.createAssert<NativeAlias>((p) => new CustomGuardError(p)),
);
