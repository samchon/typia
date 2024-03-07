import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeAlias } from "../../structures/NativeAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_NativeAlias = _test_assert(CustomGuardError)(
  "NativeAlias",
)<NativeAlias>(NativeAlias)((input) =>
  typia.assert<NativeAlias>(input, (p) => new CustomGuardError(p)),
);
