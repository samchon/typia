import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_is_NativeSimple = _test_is("NativeSimple")<NativeSimple>(
  NativeSimple,
)((input) => typia.is<NativeSimple>(input));
