import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeUnion } from "../../structures/NativeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_NativeUnion = _test_assert(CustomGuardError)(
  "NativeUnion",
)<NativeUnion>(NativeUnion)((input) =>
  typia.assert<NativeUnion>(input, (p) => new CustomGuardError(p)),
);
