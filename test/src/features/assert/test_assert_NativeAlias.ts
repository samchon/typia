import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_assert_NativeAlias = _test_assert(TypeGuardError)(
  "NativeAlias",
)<NativeAlias>(NativeAlias)((input) => typia.assert<NativeAlias>(input));
