import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_assert_NativeAlias = _test_assert("NativeAlias")<NativeAlias>(
  NativeAlias,
)((input) => typia.assert<NativeAlias>(input));
