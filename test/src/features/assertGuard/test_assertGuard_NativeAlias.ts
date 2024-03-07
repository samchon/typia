import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeAlias } from "../../structures/NativeAlias";

import { TypeGuardError } from "typia";

export const test_assertGuard_NativeAlias = _test_assertGuard(TypeGuardError)(
  "NativeAlias",
)<NativeAlias>(NativeAlias)((input) => typia.assertGuard<NativeAlias>(input));
