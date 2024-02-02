import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_assert_ObjectDate = _test_assert("ObjectDate")<ObjectDate>(
  ObjectDate,
)((input) => typia.assert<ObjectDate>(input));
