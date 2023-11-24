import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_assert_NativeSimple = _test_assert(
  "NativeSimple",
)<NativeSimple>(NativeSimple)((input) => typia.assert<NativeSimple>(input));
