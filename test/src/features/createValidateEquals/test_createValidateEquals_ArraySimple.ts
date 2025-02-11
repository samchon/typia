import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createValidateEquals_ArraySimple = _test_validateEquals(
  "ArraySimple",
)<ArraySimple>(ArraySimple)(typia.createValidateEquals<ArraySimple>());
